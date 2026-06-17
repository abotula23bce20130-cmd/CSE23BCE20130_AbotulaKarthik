import express from 'express'
import { getDoctorProfile, loginDoctor, registerDoctor } from '../controllers/doctorController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const doctorRouter = express.Router()

doctorRouter.post('/register',registerDoctor)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/profile',authMiddleware,getDoctorProfile)

export default doctorRouter