import express, { response } from "express";
import dotenv from "dotenv";
import auth from "./middlewares/auth.js";
import validation from "./middlewares/validation.js";
import signup from "./controllers/signup.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(auth, (req, res) => {
  res.send("passed");
});
// app.post('/signup', auth, signup)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
