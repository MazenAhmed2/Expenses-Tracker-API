import bcrypt from 'bcrypt'
import users from '../models/users.js'
import genToken from '../services/genToken.js'



export default async (req, res)=>{
  try {
    // Parse data from body
    let {username, password} = req.body

    // Check if user already exists
    if ((await users.find({username: username})).length > 0)  throw new Error('There is something wrong in username or password')

    // Hash the password
    let salt = bcrypt.genSaltSync(10)
    let hashedPassword = bcrypt.hashSync(password, salt)

    // Insert data in db
    let id = (await users.insertOne({username: username, password: hashedPassword}))._id.toString()

    // Generate token
    const token = await genToken(id)

    
    // Put token in headers
    res.set('Set-Cookie', `jwt=${token}; path=/; HttpOnly; SameSite=Strict`)
    res.status(201).json({token : token})
  } catch(err){
    console.log(err)
    res.status(400).json({success: false})
  }
}