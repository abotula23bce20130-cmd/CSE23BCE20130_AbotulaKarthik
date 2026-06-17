import express from "express";

import {
    bookAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointmentStatus,
    deleteAppointment,
    getAppointmentStatus
} from "../controllers/appointment.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/book", bookAppointment);

appointmentRouter.get("/", getAllAppointments);

appointmentRouter.get("/:id", getAppointmentById);

appointmentRouter.patch("/:id/status", updateAppointmentStatus);

appointmentRouter.get('/:id/status',getAppointmentStatus)

appointmentRouter.delete("/:id", deleteAppointment);

export default appointmentRouter;