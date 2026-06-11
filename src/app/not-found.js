import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-bold text-[#f3b54a]">404</h1>

        <h2 className="mt-4 text-4xl font-bold text-white">Page Not Found</h2>

        <p className="mt-4 text-lg text-gray-800">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Try returning to the homepage.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#f3b54a] text-black font-semibold hover:scale-105 transition"
          >
            Go Home
          </Link>

          <Link
            href={`/all-book/${"00"}`}
            className="px-6 py-3 rounded-full border border-[#f3b54a] text-[#f3b54a] hover:bg-[#f3b54a] hover:text-black transition"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
}
