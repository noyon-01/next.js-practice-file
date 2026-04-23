import Link from "next/link";

export default function UserPage({ user }) {
  return (
    <div className="bg-blue-300 mt-5 p-5 rounded">
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <p className="text-2xl font-semibold">{user.email}</p>
      <div>
        <Link href={`/users/${user.id}`}>
          <button className="btn btn-primary mt-3">Show Details</button>
        </Link>
        <button></button>
      </div>
    </div>
  );
}
