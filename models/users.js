import mongoose, { Model, mongo } from 'mongoose'
import env from '../config.js'

mongoose.connect(env.DB_URL)

const schema = mongoose.Schema({
  username: String,
  password: String
})

export default mongoose.model('users', schema);