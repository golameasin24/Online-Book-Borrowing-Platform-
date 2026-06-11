import Image from "next/image";

import bookImage from "../../../public/image.jpg";

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import BrowNow from "../shared/BrowNow";

const Right_Side_bar = ({ books, category_name }) => {
  return (
    <div>
      <Card className=" p-0 shadow-none overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-[14/9] w-full border-b">
            <Image
              alt={books?.title || "Book Cover"}
              fill
              className="object-cover"
              src={books?.image_url ? books.image_url : bookImage}
            />

            <span
              className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded bg-white/90 backdrop-blur-sm ${
                category_name?.category_name === "Story"
                  ? "border border-green-800 text-green-700"
                  : "border border-purple-800 text-purple-700"
              }`}
            >
              {category_name?.category_name}
            </span>
          </div>

          <div className="px-4 py-4 space-y-3">
            <div>
              <h2 className="font-semibold line-clamp-1">{books?.title}</h2>
              <p className="mt-1 text-muted-foreground text-sm">
                Written by: {books?.author}
              </p>
            </div>
            <div>
              <BrowNow bookData={books} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Right_Side_bar;
