import express from "express";
import controller from "../controllers/expenses.js";

const router = express.Router();

/**
 * @openapi
 * /expenses :
 *   get :
 *     tags :
 *       - Expenses
 *     summary : Get all user expenses
 *     description : Retrieve all user expenses from db using jwt
 *     responses :
 *       200 :
 *         description : successful with all expenses
 *         content :
 *           application/json :
 *             schema :
 *               $ref : '#/components/schemas/expenses'
 *       500 :
 *         description: Internal server error
 *     security :
 *       - bearerAuth : []
 *
 */
router.get("/", controller.getAllExpenses);

/**
 * @openapi
 * /expenses/{id} :
 *   get :
 *     tags :
 *       - Expenses
 *     parameters :
 *       - in : path
 *         name : id
 *         required : true
 *         description : Object ID
 *         schema :
 *           type : string
 *     summary : Get Expense by ID
 *     description : Retrieve all user expenses from db using jwt
 *     responses :
 *       200 :
 *          description : successful with all expenses
 *          content :
 *            application/json :
 *              schema :
 *                $ref : '#/components/schemas/expense'
 *       400 :
 *          description : faliure
 */
router.get("/:id", controller.getExpenseById);

/**
 * @openapi
 * '/expenses' :
 *   post :
 *     tags :
 *       - Expenses
 *     summary : Create a Expense
 *     security :
 *       - bearerAuth : []
 *     requestBody:
 *       required : true
 *       content :
 *         application/json :
 *           schema :
 *             $ref : '#/components/schemas/createExpenseInput'
 *     responses :
 *       200 :
 *         description : Posted Successfully
 *         content :
 *           application/json :
 *             schema :
 *                $ref : '#/components/schemas/expense'
 */
router.post("/", controller.createExpense);

/**
 * @openapi
 * '/expenses/{id}' :
 *   put :
 *     parameters :
 *       - in : path
 *         name : id
 *         schema :
 *           type : string
 *         required : true
 *         description : Numerical ID for Expense
 *     tags :
 *       - Expenses
 *     summary : Update a Expense
 *     security :
 *       - bearerAuth : []
 *     requestBody:
 *       required : true
 *       content :
 *         application/json :
 *           schema :
 *             $ref : '#/components/schemas/createExpenseInput'
 *     responses :
 *       200 :
 *         description : Posted Successfully
 *         content :
 *           application/json :
 *             schema :
 *                $ref : '#/components/schemas/expense'
 */
router.put("/:id", controller.updateExpense);

/**
 * @openapi
 * '/expenses/{id}' :
 *   delete :
 *     parameters :
 *       - in : path
 *         name : id
 *         schema :
 *           type : string
 *         required : true
 *         description : Object ID for Expense
 *     tags :
 *       - Expenses
 *     summary : Delete a Expense
 *     security :
 *       - bearerAuth : []
 *     responses :
 *       200 :
 *         description : Posted Successfully
 *       404 :
 *         description : Not found
 * 
 */
router.delete("/:id", controller.deleteExpense);

export default router;
