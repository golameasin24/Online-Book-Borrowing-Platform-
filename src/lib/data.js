export const fetured_book = async () => {
  const res = fetch("https://online-book-server-lahm.onrender.com/books");

  const data = (await res).json();

  return data;
};
