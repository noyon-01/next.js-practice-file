export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.slice(0, 3).map((book) => ({ bookId: book.id }));
}

export default async function BookDetailsPage({ params }) {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();

  return (
    <>
      <div className="container mx-auto w-[20vw]">
        <div className="bg-indigo-300 mt-5 p-5 rounded">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-2xl font-semibold">{book.author}</p>
          <p className="text-2xl font-semibold">{book.genre}</p>
          <p className="text-2xl font-semibold">{book.rating}</p>
          <p className="text-2xl font-semibold">{book.price}</p>
        </div>
      </div>
    </>
  );
}
