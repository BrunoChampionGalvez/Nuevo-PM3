import { Router } from "express";
import { cancelAppointmentController, getAppointmentByIdController, getAppointmentsController, scheduleAppointmentController } from "../controllers/appointmentsController";

const appointmentsRouter = Router()

appointmentsRouter.get("/appointments", getAppointmentsController)
appointmentsRouter.get("/appointment/:id", getAppointmentByIdController)
appointmentsRouter.post("/appointment/schedule", scheduleAppointmentController)
appointmentsRouter.put("/appointment/cancel/:id", cancelAppointmentController)


export default appointmentsRouter