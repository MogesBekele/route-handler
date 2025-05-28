import fs from 'fs';
import path from 'path';

export const ServerComponentTwo = () => {
  const filePath = path.join(process.cwd(), 'route-handler', 'src', 'components', 'server-component-two.tsx');
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    fileContent = 'File not found';
  }

  return (
    <div>
      <h1>server component two</h1>
      {/* Optionally display fileContent */}
    </div>
  );
};