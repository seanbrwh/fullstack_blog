import fs from "fs";
import path from "path";

function renameFilesInDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      renameFilesInDir(filePath);
    } else if (path.extname(file) === ".js") {
      fs.renameSync(filePath, filePath.replace(".js", ".cjs"));
    }
  });
}

const DIST_DIR = "./dist/server"; // Replace with your output directory
renameFilesInDir(DIST_DIR);
