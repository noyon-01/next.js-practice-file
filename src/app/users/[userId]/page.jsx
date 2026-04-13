import Link from "next/link";

export default async function userId({ params }) {
  const { userId } = await params;

  const api = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const data = await api.json();
  console.log(data);

  return (
    <div className="container mx-auto bg-cyan-200 rounded p-4 mt-3 w-80">
      <h1 className="text-3xl font-bold">Name: {data.name}</h1>
      <p className="text-xl font-semibold">Email: {data.email}</p>
      <p className="text-xl font-semibold">Address: {data.address.city}</p>
      <p className="text-xl font-semibold">Website: {data.website}</p>
      <p className="text-xl font-semibold">Company: {data.company.name}</p>
      <Link href="/users">
        <button className="btn btn-primary mt-3">Back To Users Page</button>
      </Link>
    </div>
  );
}
