import Link from "next/link";

export default function Book({ book }) {
  return (
    <div className="bg-indigo-300 mt-5 p-5 rounded">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-2xl font-semibold">{book.author}</p>
      <p className="text-2xl font-semibold">{book.genre}</p>
      <p className="text-2xl font-semibold">{book.rating}</p>
      <p className="text-2xl font-semibold">{book.price}</p>
      <Link href={`./books/${book.id}`}>
        <button className="btn btn-primary mt-3">Show Details</button>
      </Link>
    </div>
  );
}
