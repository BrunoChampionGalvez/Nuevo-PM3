import { appointmentRepository, userRepository } from "../data-source"
import { Appointment } from "../entities/Appointment"
import { User } from "../entities/User"
import { IAppointment } from "../entities/interfaces"
import Status from "../enums/Status"

let appointments: IAppointment[] = []

export const getAppointmentsService = async () => {
    return await appointmentRepository.find()
}

export const getAppointmentByIdService = async (id:number) => {
    const appointment: Appointment | null = await appointmentRepository.findOneBy({
        id
    })

    return appointment
}

export const scheduleAppointmentService = async (date: string, time: string, userId: number) => {
    const user: User | null = await userRepository.findOneBy({
        id: userId
    })
    
    if (user) {
        const appointment: Appointment = await appointmentRepository.create({
            date,
            time,
        })
        if (appointment) {
            appointment.user = user
            if (appointment.user) {
                await appointmentRepository.save(appointment)
                return true
            }
        }
    }

    return false
}

export const cancelAppointmentService = async (id: number) => {
    const appointment: Appointment | null = await appointmentRepository.findOneBy({
        id
    })
    if (appointment) {
        appointment.status = Status.CANCELLED
        const savedAppointment = await appointmentRepository.save(appointment)
        if (savedAppointment.status === "Cancelado") {
            return true
        }
    }

    return false
}