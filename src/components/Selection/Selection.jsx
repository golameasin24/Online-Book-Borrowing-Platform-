import { fetured_book } from "@/lib/data";
import Selection_Card from "./Card";
import { playfair } from "@/app/layout";
import { Button } from "../ui/button";
import { BiRightArrow } from "react-icons/bi";

const Selection = async () => {
  const fetured_data = await fetured_book();

  console.log(fetured_data);
  return (
    <>
      <div className="flex items-center justify-between container mx-auto py-5">
        <div>
          <p>FEATURED</p>
          <h4 className={`${playfair.className} text-5xl font-bold`}>
            This Week's selection
          </h4>
        </div>

        <div>
          <Button
            className={`px-5 py-2 rounded-2xl bg-green-700 text-white hover:bg-gray-600`}
          >
            View All Books <BiRightArrow />
          </Button>
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
