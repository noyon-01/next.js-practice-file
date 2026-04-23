export default function Ai_Data({ai}) {
  return (
    <div className="bg-blue-300 mt-5 p-5 rounded">
      <h1 className="text-3xl font-bold">{ai.name}</h1>
      <p className="text-2xl font-semibold">{ai.email}</p>
      <div>
        <Link href={`/users/${ai.id}`}>
        <button className="btn btn-primary mt-3">Show Details</button>
        </Link>
        <button></button>
      </div>
    </div>
  )
}