import { fetured_book } from "@/lib/data";
import Selection_Card from "./Card";
import { playfair } from "@/app/layout";
import { Button } from "../ui/button";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

const Selection = async () => {
  const fetured_data = await fetured_book();

  return (
    <>
      <div className="container mx-auto py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider">FEATURED</p>

            <h4
              className={`${playfair.className} text-3xl md:text-5xl font-bold`}
            >
              This Week&apos;s Selection
            </h4>
          </div>

          <div>
            <Button
              asChild
              className="rounded-2xl bg-green-700 px-5 py-2 text-white hover:bg-gray-600"
            >
              <Link href="/all-book/00">
                View All Books
                <BiRightArrow className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {fetured_data.slice(0, 4).map((book) => (
          <Selection_Card key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Selection;
