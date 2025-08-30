import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send({ data: "Index route!" });
});

app.get("/hello", (_, res) => {
  res.send({ data: "Hello ali!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
