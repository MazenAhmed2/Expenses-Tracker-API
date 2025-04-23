import mongoose, { mongo } from 'mongoose'
import env from '../config.js'

mongoose.connect(env.DB_URL)

/**
 * @openapi
 * components:
 *   schemas:
 *     createExpenseInput:
 *       type : object
 *       required:
 *         - cost
 *         - category
 *       properties :
 *         cost :
 *           type : number
 *           default : 50.0
 *         category :
 *           type : string
 *           default : Pills
 *     expense:
 *       type : object
 *       required:
 *         - _id
 *         - cost
 *         - category
 *         - userId
 *       properties :
 *         cost :
 *           type : number
 *           default : 50.0
 *         category :
 *           type : string
 *           default : Pills
 *         _id :
 *           type : string
 *           default : 18hdc188h81hd1ak
 *         userId :
 *           type : string
 *           default : 18hdc188h81hd1ak
 *     expenses:
 *       type : array
 *       items :
 *         type : object
 *         required:
 *           - _id
 *           - cost
 *           - category
 *           - userId
 *         properties :
 *           cost :
 *             type : number
 *             default : 50.0
 *           category :
 *             type : string
 *             default : Pills
 *           _id :
 *             type : string
 *             default : 18hdc188h81hd1ak
 *           userId :
 *             type : string
 *             default : 18hdc188h81hd1ak
 */
const schema = mongoose.Schema({
  cost: {
    type: Number,
    required : true
  },
  category: {
    type: String,
    required : true
  },
  userId: {
    type: String,
    required : true
  }
})

export default mongoose.model('expenses', schema)