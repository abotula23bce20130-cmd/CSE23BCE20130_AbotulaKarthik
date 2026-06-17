import bcrypt from "bcryptjs"
import Doctor from "../models/DoctorModel.js"
import jwt from 'jsonwebtoken'


/// doctor registration API --------------------------------------------------------------------------------------------
export const registerDoctor = async (req,res)=>{
    try {
        const {fullname, email, phone, password, specialization, experience, qualification} = req.body

        const isDoctorExist = await Doctor.findOne({
            $or: [{email}, {phone}]
        })

        if(isDoctorExist){
            return res.status(400).json({
                success: false,
                message: "Doctor already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const doctor = await Doctor.create({
            fullname, email, phone,
            password: hashedPassword, 
            specialization, experience, qualification
        })


        const token = jwt.sign(
            {
                id: doctor._id,
                email: doctor.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )

        return res.status(200).json({
            success: true,
            message: "Doctor registered Successfully",
            token,
            doctor:{
                id: doctor._id,
                fullname: doctor.fullname,
                email: doctor.email,
                specialization: doctor.specialization
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

/// Doctor Login API ---------------------------------------------------------------------------------------------------
export const loginDoctor = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Credentials required"
            })
        }

        const doctor = await Doctor.findOne({email})
        if(!doctor){
            return res.status(404).json({
                success: false,
                message: "Provided Email doesn't exist in the DB"
            })
        }

        const isPass = await bcrypt.compare(password,doctor.password)
        if(!isPass){
            return res.status(401).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        const token = jwt.sign(
            {
                id: doctor._id,
                email: doctor.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '7d'
            }
        )

        return res.status(200).json({
            success: true,
            message: "Doctor LoggedIn Successfully",
            token,
            doctor:{
                id: doctor._id,
                fullname: doctor.fullname,
                email: doctor.email,
                specialization: doctor.specialization
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//// get Doctor Profile ----------------------------------------------------------------------------
export const getDoctorProfile = async (req,res)=>{
    try {
        const doctor = await Doctor.findById(req.doctor.id)
            .select("-password");

        res.status(200).json({
            success: true,
            doctor
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}