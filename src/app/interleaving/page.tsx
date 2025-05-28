import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <div>
      <h1>Interleaving Page</h1>
      <p>This page demonstrates interleaving of server and client components.</p>
      <div>
        <h2>Server Component One</h2>
       <ServerComponentOne/>
      </div>
      <div>
        <h2>Client Component One</h2>
        {/* ClientComponentOne would be imported and used here */}
      </div>
      <div>
        <h2>Server Component Two</h2>
        {/* ServerComponentTwo would be imported and used here */}
      </div>
      <div>
        <h2>Client Component Two</h2>
        {/* ClientComponentTwo would be imported and used here */}
      </div>
  
    </div>
  );
}