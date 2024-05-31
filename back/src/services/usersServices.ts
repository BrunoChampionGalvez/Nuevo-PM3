import { IUser } from "../entities/interfaces"
import { checkCredentialsService, createCredentialsService } from "./credentialsServices"

const users: IUser[] = []

export const getUsersService = () => {
    return users
}

export const getUserByIdService = (id: number) => {
    const user = users.find(user => user.id === id)

    return user
}

export const registerUserService = (id: number, name: string, email: string, birthdate: string, nDni: number, username: string, password: string) => {
    const credentialsId = createCredentialsService(username, password)
    users.push({
        id,
        name,
        email,
        birthdate,
        nDni,
        credentialsId
    })
}

export const loginUserService = (username: string, password: string) => {
    const credentialsId: number | undefined = checkCredentialsService(username, password)

    if (credentialsId) {
        const user: IUser | undefined = users.find(user => user.credentialsId === credentialsId)
        return user
    }

    return undefined
}