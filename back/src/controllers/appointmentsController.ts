import { Request, Response } from "express";

export const getAppointmentsController = (req: Request, res: Response) => {
    res.status(200).send("getAppointmentsController funcionando.")
}

export const getAppointmentById = (req: Request, res: Response) => {
    res.status(200).send("getAppointmentById funcionando.")
}

export const scheduleAppointment = (req: Request, res: Response) => {
    res.status(201).send("scheduleAppointment funcionando.")
}

export const cancelAppointment = (req: Request, res: Response) => {
    res.status(200).send("cancelAppointment funcionando.")
}