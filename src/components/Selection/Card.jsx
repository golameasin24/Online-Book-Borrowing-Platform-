import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";
// 1. FIXED: Correctly import Link from Next.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Selection_Card({ book }) {
  return (
    // Cleaned up non-standard Tailwind classes (max-w-73 changed to max-w-xs or max-w-[292px])
    <Card className="w-full max-w-xs mx-auto p-0 shadow-none overflow-hidden">
      <CardContent className="p-0">
        {/* 2. FIXED: Removed competing 'absolute' and set proper relative container */}
        <div className="relative aspect-[14/9] w-full border-b">
          <Image
            alt={book.title || "Book Cover"}
            fill // Using 'fill' is much safer for responsive aspect-ratio containers
            className="object-cover"
            src={book.image_url}
          />
          {/* FIXED: Placed badge absolute inside the relative container */}
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded bg-white/90 backdrop-blur-sm ${
              book.category === "Story"
                ? "border border-green-800 text-green-700"
                : "border border-purple-800 text-purple-700"
            }`}
          >
            {book.category}
          </span>
        </div>

        <div className="px-4 py-4">
          <h2 className="font-semibold line-clamp-1">{book.title}</h2>
          <p className="mt-1 text-muted-foreground text-sm">{book.author}</p>
        </div>
      </CardContent>

      {/* 3. FIXED: Styled the Next.js Link properly as a flex row with icons */}
      <div className="border-t px-4 py-3 bg-muted/50">
        <Link
          href={`/book/${book.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          <span>View Details</span>
          <FaAngleDoubleRight className="size-3.5" />
        </Link>
      </div>
    </Card>
  );
}
