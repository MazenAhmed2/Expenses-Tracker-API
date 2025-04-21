import jwt from "jsonwebtoken";
import env from "../config.js";

export default async (id) => {
  return jwt.sign(
    { sub : id},
    env.SECRET,
  );
};
