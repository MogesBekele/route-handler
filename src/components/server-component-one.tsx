import fs from 'fs';
import path from 'path';
import { ServerComponentTwo } from './server-component-two';

export const ServerComponentOne = () => {
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(
      path.join(process.cwd(), 'src/components/server-component-one.tsx'),
      'utf-8'
    );
  } catch (e) {
    fileContent = 'File not found';
  }

  return (
    <>
      <h1>server component one</h1>
      <pre>{fileContent.slice(0, 200)}...</pre>
      <ServerComponentTwo />
    </>
  );
};