import express from 'express'
import controller from '../controllers/expenses.js'
// import signupController from '../controllers/signup.js'
// import loginController from '../controllers/login.js'

const router = express.Router()

router.get('/', controller.getAllExpenses)
router.get('/:id', controller.getExpenseByID)
// router.post('/')
// router.put('/:id')
// router.delete('/:id')


export default router