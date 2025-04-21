import jwt from 'jsonwebtoken'
import env from '../config.js'

export default async (req, res, next)=>{
  try {
    // Parsing token from header
    const token = req.headers.authorization.split(' ')[1]

    // Check if there is token
    if (!token)
      res.status(401).json({err: 'No jwt'})

    // Verify the token
    jwt.verify(token, env.SECRET)

    // Decode the token Store the userId in req
    const {sub} = jwt.decode(token)
    req.userId = sub
    next()
  } catch {
    res.status(401).json({err : 'Invalid Token'})
  }
}