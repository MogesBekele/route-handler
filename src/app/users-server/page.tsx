import { resolve } from "path";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};


export default async function UsersServer() {

  await new Promise((resolve)=>{setTimeout(resolve, 2000)})
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