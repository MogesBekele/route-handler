import fs from 'fs';
export const ServerComponentTwo = () => {
  fs.readFileSync('/src/components/server-component-two.tsx', 'utf8', )
  return(

    <div>
      <h1>server component two</h1>
    </div>
  )
}