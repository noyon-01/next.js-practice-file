export default function Phone({phone}) {
  return (
    <div className="bg-emerald-500 mt-5 p-5 rounded">
      <h1 className="text-3xl font-bold">{phone.name}</h1>
      <p className="text-2xl font-semibold">{phone.category}</p>
      <p className="text-2xl font-semibold">{phone.price}</p>
    </div>
  )
}