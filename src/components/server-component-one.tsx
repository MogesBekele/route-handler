import fs from "fs";
import path from "path";

import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  const filePath = path.join(
    process.cwd(),
    "route-handler",
    "src",
    "components",
    "server-component-one.tsx"
  );
  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    fileContent = "File not found";
  }

  return (
    <>
      <h1>server component one</h1>
     <ClientComponentOne/>
    </>
  );
};
