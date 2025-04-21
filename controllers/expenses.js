import expenses from '../models/expenses.js'

export default {
  
  getAllExpenses : async function (req, res){
    try {
      res.status(200).json(await expenses.find())
    } catch(err){
      console.log(err)
      res.status(400).json({success : false})
    }
  }
}