import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello raza!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
