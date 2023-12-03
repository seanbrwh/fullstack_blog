import express from "express";
import path from "path";

export const app = express();

const port = process.env.PORT || 5051;

const frontendFiles = path.join(process.cwd(), "/dist/client");
app.use(express.static(frontendFiles));

app.get("/api/test", (_, res) => {
  res.json({ greeting: "Hello How are you today." });
});

app.get("*", (_, res) => {
  res.sendFile(path.join(frontendFiles, "index.html"));
});

app.listen(port, () => {
  console.info(`App listening at http://localhost:${port}`);
});
