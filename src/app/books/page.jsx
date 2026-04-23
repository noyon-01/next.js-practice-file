import Book from "@/components/book";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books", {
    next: { revalidate: 10 },
  });
  return res.json();
};

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center py-6">
        This is Revalidation Data Fetch Page
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
