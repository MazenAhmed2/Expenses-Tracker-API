import bcrypt from 'bcrypt'
import users from '../models/users.js'
import genToken from '../services/genToken.js'



export default async (req, res)=>{
  try {
    // Parse data from body
    let {username, password} = req.body

    // Check if user exists
    let result = await users.find({username: username})
    if (result.length == 0)
      throw new Error('There is something wrong in username or password')

    // Parse the hashed password and userId from db result
    let hashedPassword = result[0].password
    let userId = result[0]._id.toString()

    // Compare the passwords
    if(!(bcrypt.compareSync(password, hashedPassword)))
      throw new Error('There is something wrong in username or password')

    // Generate token
    const token = await genToken(userId)


    // Put token in headers
    res.status(200).set('Set-Cookie', `jwt=${token}; path=/; HttpOnly; SameSite=Strict`).json({token : token})
  } catch(err){
    console.log(err)
    res.status(404).json({success: false})
  }
}