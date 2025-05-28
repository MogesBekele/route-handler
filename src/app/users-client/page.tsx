type User ={
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;

}

export default async function UsersClient() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await res.json();

  return (
    <div>
      <h1>Users Client</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}