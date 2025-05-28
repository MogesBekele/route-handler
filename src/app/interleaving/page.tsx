import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <p>This page demonstrates interleaving of server and client components.</p>
      <div>
   
       <ServerComponentOne/>
      </div>
  
    </>
  );
}