
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};


export default async function UsersServer() {
  const res= await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await res.json();



  return (
    <div>
      <h1>Users Server</h1>
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