import UserPage from "@/components/user";

export default async function Users() {
  const api = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await api.json();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {users.map((user, index) => (
          <UserPage key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
