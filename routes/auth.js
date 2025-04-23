import express from "express";
import signupController from "../controllers/signup.js";
import loginController from "../controllers/login.js";

const router = express.Router();

/**
 * @openapi
 * /auth/signup :
 *   post :
 *     tags :
 *       - Auth
 *     requestBody :
 *       required : true
 *       content :
 *         application/json :
 *           schema :
 *             properties :
 *               username :
 *                 type : string
 *               password :
 *                 type : string
 *             required :
 *               -username
 *               -password
 *     summary : Sign up in the db
 *     description : pass a body with username and password( at least 8 characters ), this sign up in db and return jwt token
 *     responses :
 *       200 :
 *         description : Succefull response with jwt token in cookie header
 *       400 :
 *         description : Invalid input Check that password greater than 8 characters
 */
router.post("/signup", signupController);

/**
 * @openapi
 * /auth/login :
 *   post :
 *     tags :
 *       - Auth
 *     requestBody :
 *       required : true
 *       content :
 *         application/json :
 *           schema :
 *             properties :
 *               username :
 *                 type : string
 *               password :
 *                 type : string
 *             required :
 *               -username
 *               -password
 *     summary : Login
 *     description : pass a body with username and password, this login in db and return jwt token
 *     responses :
 *       200 :
 *         description : Succefull response with jwt token in cookie header and body
 */
router.post("/login", loginController);

export default router;
