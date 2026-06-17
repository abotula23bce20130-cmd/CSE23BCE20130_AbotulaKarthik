import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email:{type: String, required: true, unique: true},
    age:{type: Number, required: true,min:0},
    gender:{type: String, enum:['F','M','O'], required: true},
    phone: {type: String, required: true,unique: true},
    bloodGroup: {type: String, enum: ['A+','A-','B+','B-','AB+','AB-','O+','O-'], required: true},
    address:{type: String, required: true},
},{
    timestamps: true
})

const Patient = mongoose.models.Patient || mongoose.model("Patient",PatientSchema)

export default Patient