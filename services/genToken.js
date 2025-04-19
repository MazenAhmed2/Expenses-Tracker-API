import jwt from "jsonwebtoken";
import env from "../config.js";

export default async (reqBody) => {
  return jwt.sign(
    { username: reqBody.username, password: reqBody.password },
    env.SECRET,
  );
};
