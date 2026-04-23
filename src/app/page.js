import Ai_Data from "@/components/ai";
import Ai from "@/components/ai";

const getProduct = async () => {
  const res = await fetch("http://localhost:5000/Ai_Products");
  return res.json();
};

export default async function Home() {
  const data = await getProduct();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {data.map((ai) => (
          <Ai_Data key={ai.id} ai={ai} />
        ))}
      </div>
    </div>
  );
}
