import mongoose, { Model, mongo } from 'mongoose'
import env from '../config.js'

mongoose.connect(env.DB_URL)

const schema = mongoose.Schema({
  username: {
    type: String,
    required : true
  },
  password: {
    type: String,
    required : true
  }
})

export default mongoose.model('users', schema);