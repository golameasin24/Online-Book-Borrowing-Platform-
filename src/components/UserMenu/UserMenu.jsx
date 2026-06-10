"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";

const UserMenu = () => {
  // export const { signIn, signUp, useSession } = createAuthClient();
  const { data } = useSession();

  const user_data = data?.user;
  return (
    <div>
      {user_data ? (
        <div className="flex gap-2">
          <p className="cursor-pointer rounded-full text-white bg-green-800 px-3 py-1 text-sm font-medium text-gray-800">
            {user_data?.name}
          </p>
          <button
            className="cursor-pointer rounded-full text-white bg-green-800 px-3 py-1 text-sm font-medium text-gray-800"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link
          className="cursor-pointer rounded-full text-white bg-green-800 px-3 py-1 text-sm font-medium text-gray-800"
          href={"/signin"}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default UserMenu;
