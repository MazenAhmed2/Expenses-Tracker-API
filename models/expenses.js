import mongoose, { mongo } from 'mongoose'
import env from '../config.js'

mongoose.connect(env.DB_URL)

const schema = mongoose.Schema({
  cost: Number,
  category: String,
  user_id: String
})

export default mongoose.model('expenses', schema)