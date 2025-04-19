import jwt from "jsonwebtoken";
import env from "../config.js";

export default async (username) => {
  return jwt.sign(
    { username: username},
    env.SECRET,
  );
};
