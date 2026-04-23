export default function Ai_Data({ ai }) {
  return (
    <div className="bg-teal-400 mt-5 p-5 rounded">
      <h1 className="text-3xl font-bold">{ai.name}</h1>
      <p className="text-2xl font-semibold">{ai.developer}</p>
      <p className="text-2xl font-semibold">{ai.type}</p>
      <p className="text-2xl font-semibold">{ai.model}</p>
    </div>
  );
}
