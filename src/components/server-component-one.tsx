import fs from 'fs';
export const ServerComponentOne = () => {
  fs.readFileSync('/src/components/server-component-one.tsx', 'utf8', )
  return(

    <div>
      <h1>server component one</h1>
    </div>
  )
}