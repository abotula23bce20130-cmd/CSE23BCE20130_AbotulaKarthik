import Patient from "../models/PatientModel.js";

export const createPatient = async (req, res) => {
    try {
        const {
            fullname,
            email,
            age,
            gender,
            phone,
            bloodGroup,
            address
        } = req.body;

        const existingPatient = await Patient.findOne({
            $or: [{ email }, { phone }]
        });

        if (existingPatient) {
            return res.status(400).json({
                success: false,
                message: "Patient already exists"
            });
        }

        const patient = await Patient.create({
            fullname,
            email,
            age,
            gender,
            phone,
            bloodGroup,
            address
        });

        return res.status(201).json({
            success: true,
            message: "Patient created successfully",
            patient
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};