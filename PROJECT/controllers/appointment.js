import Appointment from "../models/Appointment.js";
import Patient from "../models/PatientModel.js";


//// booking appointment API =========================================================================
export const bookAppointment = async (req,res)=>{
    try {
        const {patientId, doctorId, appointmentDate, reason} = req.body

        if (!patientId ||!doctorId ||!appointmentDate ||!reason) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const patient = await Patient.findById(patientId)
        if(!patient){
            return res.status(404).json({
                success: false,
                message: "Patient not found"
            })
        }

        const appointment = await Appointment.create({
            patient: patientId,
            doctor: doctorId,
            appointmentDate,
            reason
        })

         return res.status(201).json({
            success: true,
            message: "Appointment booked successfully",
            appointment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });   
    }
}

//// View All appointments =========================================================================
export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate("patient")
            .populate("doctor");

        return res.status(200).json({
            success: true,
            count: appointments.length,
            appointments
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/// get appointment by id ==========================================================================
export const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(
            req.params.id
        )
            .populate("patient")
            .populate("doctor");

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }

        return res.status(200).json({
            success: true,
            appointment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/// update the status ==============================================================================
export const updateAppointmentStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const appointment =
            await Appointment.findByIdAndUpdate(
                req.params.id,
                { status },
                { new: true }
            );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Status updated successfully",
            appointment
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//// delete appointment =============================================================================
export const deleteAppointment = async (req, res) => {
    try {
        const appointment =
            await Appointment.findByIdAndDelete(
                req.params.id
            );

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Appointment deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getAppointmentStatus = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: "Appointment not found"
            });
        }

        return res.status(200).json({
            success: true,
            status: appointment.status
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};