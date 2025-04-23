import expenses from "../models/expenses.js";
import users from "../models/users.js";
import { ObjectId } from "mongodb";

export default {
  getAllExpenses: async function (req, res) {
    try {
      res.status(200).json(await expenses.find({ userId: req.userId }));
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },

  getExpenseById: async function (req, res) {
    try {
      // parse from request
      const id = req.params.id;

      // Get from db and send it to the client
      res.status(200).json(await expenses.findById(id));
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },

  createExpense: async function (req, res) {
    try {
      // parse from data from body
      const data = req.body;

      // Add userId to data that will be inserted to db
      data.userId = req.userId;

      // Create in db and Send response with the inserted object
      res.status(200).json(await expenses.insertOne(data));
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },

  updateExpense: async function (req, res) {
    try {
      // parse from request
      const id = req.params.id;

      // Parse date from req body
      let data = req.body;

      // Update in db
      await expenses.updateOne({ _id: id }, data);
      res.status(200).json((await expenses.find({ _id: id }))[0]);
    } catch (err) {
      console.log(err);
      res.status(400).json({ success: false });
    }
  },

  deleteExpense: async function (req, res) {
    try {
      // parse from request
      const id = req.params.id;

      // Delete the Expense
      let { deletedCount } = await expenses.deleteOne({ _id: id });
      // Check if thing deleted
      if (deletedCount < 1) throw new Error("Not found");

      res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(404).json({ success: false });
    }
  },
};
