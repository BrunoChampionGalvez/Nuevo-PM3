import { Request, Response } from "express";
import { IAppointment } from "../entities/interfaces";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from "../services/appointmentsServices";
import { Appointment } from "../entities/Appointment";

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService()
        if (appointments.length > 0) {
            res.status(200).json({
                appointments
            })
        } else {
            throw Error("No se encontraron turnos.")
        }
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const appointment: Appointment | null = await getAppointmentByIdService(Number(id))
        if (appointment) {
            res.status(200).json({
                appointment
            })
        } else {
            throw Error("Turno no encontrado.")
        }
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const scheduleAppointmentController = async (req: Request, res: Response) => {
    try {
        const { id, date, time, status, userId } = req.body
        const registered: boolean = await scheduleAppointmentService(date, time, userId)
        if (registered) {
            res.status(201).send("Turno creado")
        } else {
            throw Error("Datos incorrectos")
        }
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const cancelAppointmentController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const cancelled: boolean = await cancelAppointmentService(Number(id))
        if (cancelled) {
            res.status(200).send("Turno cancelado")
        } else {
            throw Error("Turno no encontrado")
        }
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}