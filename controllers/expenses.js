import expenses from '../models/expenses.js'

export default {
  
  getAllExpenses : async function (req, res){
    try {
      res.status(200).json(await expenses.find())
    } catch(err){
      console.log(err)
      res.status(400).json({success : false})
    }
  },

  getExpenseByID: async function (req, res){
    try {
      // parse from request
      const id = req.params.id

      // Get from db and send it to the client
      res.status(200).json(await expenses.findById(id))
      
    } catch(err) {
      console.log(err)
      res.status(400).json({success : false})
    }
  }
}