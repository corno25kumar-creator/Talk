import express from 'express'
import { Login } from '../controllers/userController.js'

const router = express.Router()

router.get('/login', Login)

export default router