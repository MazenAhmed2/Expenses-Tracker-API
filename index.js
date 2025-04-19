import express from 'express'
import dotenv from 'dotenv'
import auth from './middlewares/auth.js'

const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(auth)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});