import express, { json } from 'express'
import dotenv from 'dotenv'
import connectToDB from './utils/db.js';
import doctorRouter from './routes/doctorRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';
import patientRouter from './routes/patientRoutes.js';
dotenv.config()

const app = express();

app.use(json())

connectToDB()

const PORT = process.env.PORT

/////////////////////////////////
app.use('/api/doctor',doctorRouter)

app.use('/api/appointments',appointmentRouter)

app.use('/api/patients',patientRouter)

app.get('/',(req,res)=>{
    res.json({
        success: true,
        message: "WELCOME TO HOSPITAL MANAGEMENT SYSTEM"
    })
})


app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT)
})
