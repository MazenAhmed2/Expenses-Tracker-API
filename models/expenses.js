import mongoose, { mongo } from 'mongoose'
import env from '../config.js'

mongoose.connect(env.DB_URL)

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