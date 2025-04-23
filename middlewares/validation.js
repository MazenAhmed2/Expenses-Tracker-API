// Middleware to validate username and password from
// signup or login routes

import joi from "joi";

const schema = joi.object({
  username: joi.string().required(),
  password: joi.string().required().min(8),
});

export default async (req, res, next) => {
  let result = schema.validate(req.body);
  if (result.error)
    res
      .status(400)
      .json({ err: "Invalid username or password", success: false });
  else next();
};
