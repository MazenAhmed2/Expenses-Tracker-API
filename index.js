import express from "express";
import dotenv from "dotenv";
import auth from "./middlewares/auth.js";
import validation from "./middlewares/validation.js";
import authRouter from "./routes/auth.js";
import expensesRouter from "./routes/expenses.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/auth", validation, authRouter);

app.use("/expenses", auth, expensesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
