import jwt from 'jsonwebtoken'
import env from '../config.js'

export default async (req, res, next)=>{
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token)
      res.status(401).json({err: 'No jwt'})
    let result = jwt.verify(token, env.SECRET)
    console.log(result)
    // req.uuid 
    next()
  } catch {
    res.status(401).json({err : 'Invalid Token'})
  }
}