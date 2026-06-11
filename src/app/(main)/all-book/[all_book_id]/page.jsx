import LeftSideBar from "@/components/Left_side_bar/LeftSide_bar";
import Right_Side_bar from "@/components/Right_side_bar/Right_Side_bar";
import { AllBookData, category_data } from "@/lib/data";

const AllBooks = async ({ params }) => {
  const { all_book_id } = await params;

  const categoryData = await category_data();

  const book_data = await AllBookData(all_book_id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto gap-4 p-4 items-start">
      <div className="col-span-12 md:col-span-3 md:sticky md:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <LeftSideBar Active={all_book_id} category={categoryData} />
      </div>

      <div className="col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg">
        {book_data.books?.map((book) => (
          <Right_Side_bar
            category_name={book_data}
            key={book.id}
            books={book}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
