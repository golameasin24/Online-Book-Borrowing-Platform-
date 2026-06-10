export const fetured_book = async () => {
  const res = fetch("https://online-book-server-lahm.onrender.com/books");

  const data = (await res).json();

  return data;
};

export const category_data = async () => {
  const res = fetch("https://online-book-server-lahm.onrender.com/categories");

  const data = (await res).json();

  return data;
};

export const AllBookData = async (id) => {
  const res = fetch(`https://online-book-server-lahm.onrender.com/${id}`);

  const data = (await res).json();

  return data;
};
