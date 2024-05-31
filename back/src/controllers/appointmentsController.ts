import { Request, Response } from "express";
import { IAppointment } from "../entities/interfaces";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from "../services/appointmentsServices";

export const getAppointmentsController = (req: Request, res: Response) => {
    const appointments: IAppointment[] = getAppointmentsService()
    res.status(200).json({
        appointments: appointments
    })
}

export const getAppointmentByIdController = (req: Request, res: Response) => {
    const { id } = req.params
    const appointment: IAppointment | undefined = getAppointmentByIdService(Number(id))
    res.status(200).json({
        appointment: appointment
    })
}

export const scheduleAppointmentController = (req: Request, res: Response) => {
    const { id, date, time, status, userId } = req.body
    scheduleAppointmentService(id, date, time, userId, status)
    res.status(201).send("Turno creado satisfactoriamente.")
}

export const cancelAppointmentController = (req: Request, res: Response) => {
    const { id } = req.params
    cancelAppointmentService(Number(id))
    res.status(200).send("Turno cancelado satisfactoriamente.")
}