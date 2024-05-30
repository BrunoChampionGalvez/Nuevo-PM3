import { Router } from "express";
import { cancelAppointment, getAppointmentById, getAppointmentsController, scheduleAppointment } from "../controllers/appointmentsController";

const appointmentsRouter = Router()

appointmentsRouter.get("/appointments", getAppointmentsController)
appointmentsRouter.get("/appointment/:id", getAppointmentById)
appointmentsRouter.post("/appointment/schedule", scheduleAppointment)
appointmentsRouter.put("/appointment/cancel/:id", cancelAppointment)


export default appointmentsRouter