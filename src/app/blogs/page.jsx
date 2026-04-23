import Phone from "@/components/phone";

const getProduct = async () => {
  const res = await fetch("http://localhost:5000/Phones", {cache: "no-store"});
  return res.json();
};

export default async function Bolgs() {
  const products = await getProduct();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-center py-6">
        This is No-Cache Data Fetch Page
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {
          products.map(phone => <Phone key={phone.id} phone={phone}/>)
        }
      </div>
    </div>
  );
}
