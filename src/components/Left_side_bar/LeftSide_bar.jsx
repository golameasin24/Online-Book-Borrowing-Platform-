import Link from "next/link";
import { Button } from "../ui/button";

const LeftSide_bar = ({ category, Active }) => {
  return (
    <>
      <div>
        {category?.map((ct) => (
          <Button
            asChild
            variant={Active === ct.category_id ? "secondary" : "ghost"}
            className={`w-full justify-start py-6 text-black font-medium rounded-lg transition-all duration-200
          ${
            Active === ct?.category_id
              ? "bg-green-500 text-[#222222] font-semibold"
              : "text-[#9F9F9F] hover:text-[#444444]" // ইনঅ্যাক্টিভ ও হোভার স্টাইল
          }`}
            key={ct.category_id}
          >
            <Link href={`/all-book/${ct.category_id}`}>{ct.category_name}</Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default LeftSide_bar;
