import { IAppointment } from "../entities/interfaces"
import Status from "../enums/Status"

let appointments: IAppointment[] = []

export const getAppointmentsService = () => {
    return appointments
}

export const getAppointmentByIdService = (id:number) => {
    const appointment: IAppointment | undefined = appointments.find(appointment => appointment.id === id)

    return appointment
}

export const scheduleAppointmentService = (id: number, date: string, time: string, userId: number, status: Status) => {
    appointments.push({
        id,
        date,
        time,
        status,
        userId
    })
}

export const cancelAppointmentService = (id: number) => {
    const appointment: IAppointment | undefined = appointments.find(appointment => appointment.id === id)

    if (appointment) {
        appointment.status = Status.CANCELLED
        appointments = [...new Set([...appointments, appointment])]
    }
}