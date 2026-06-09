import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Selection_Card({ book }) {
  return (
    <Card className="w-full max-w-73 container mx-auto gap-0 py-0 shadow-none">
      <CardContent className="p-0">
        <div className="relative aspect-14/9 border-y h-55 absolute">
          <Image
            alt="pic"
            width={500}
            height={500}
            className="size-full object-cover"
            src={book.image_url}
          />
          <Button
            className={`relative top-[-200] left-2  ${book.category === "Story" ? "border border-green-800 text-green-700" : "border border-purple-800 text-purple-700"}`}
          >
            {book.category}
          </Button>
        </div>
        <div className="px-4 py-4">
          <h2 className="font-semibold">{book.title}</h2>
          <p className="mt-1 text-muted-foreground text-sm">{book.author}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t px-2 py-2! pb-0">
        <Button className="shrink-0 text-muted-foreground" variant="ghost">
          <span className="hidden sm:inline">Details</span>
          <FaAngleDoubleRight />{" "}
        </Button>
      </CardFooter>
    </Card>
  );
}
