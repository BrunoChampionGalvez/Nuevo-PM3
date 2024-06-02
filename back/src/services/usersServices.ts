import { userRepository } from "../data-source"
import { User } from "../entities/User"
import { IUser } from "../entities/interfaces"
import { checkCredentialsService, createCredentialsService } from "./credentialsServices"

const users: IUser[] = []

export const getUsersService = async () => {
    return await userRepository.find()
}

export const getUserByIdService = async (id: number) => {
    const user: User | null = await userRepository.findOne({
        where: { id: id },
        relations: ['appointments']
    })
    return user
}

export const registerUserService = async (name: string, email: string, birthdate: string, nDni: number, username: string, password: string) => {
    const credentials = await createCredentialsService(username, password)
    const user = await userRepository.create({
        name,
        email,
        birthdate,
        nDni
    })

    if (user) {
        user.credentials = credentials
        const savedUser = await userRepository.save(user)
        if (savedUser) {
            return true
        }
    }
    return false
}

export const loginUserService = async (username: string, password: string) => {
    const credentialsId: number | null = await checkCredentialsService(username, password)

    if (credentialsId) {
        const user: User | null = await userRepository.findOne({
            where: { credentials: { id: credentialsId}}
        })
        if (user) {
            return user
        }
    }

    return false
}