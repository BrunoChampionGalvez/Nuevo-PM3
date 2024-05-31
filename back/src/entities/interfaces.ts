import Status from "../enums/Status"

interface IUser {
    id: number,
    name: string,
    email: string,
    birthdate: string,
    nDni: number,
    credentialsId: number
}

interface IAppointment {
    id: number,
    date: string,
    time: string,
    userId: number,
    status: Status
}

interface ICredentials {
    id: number,
    username: string,
    password: string
}

export {IUser, IAppointment, ICredentials}