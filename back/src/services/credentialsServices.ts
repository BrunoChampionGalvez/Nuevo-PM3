import { credentialsRepository } from "../data-source";
import { Credentials } from "../entities/Credentials";
import { ICredentials } from "../entities/interfaces";

const credentials: ICredentials[] = []
let id = 1

export const createCredentialsService = async (username: string, password: string) => {
    const credentials = await credentialsRepository.create({
        username,
        password
    })
    const savedCredentials = await credentialsRepository.save(credentials)
    return savedCredentials
}

export const checkCredentialsService = async (username: string, password: string) => {
    const credentials: Credentials | null = await credentialsRepository.findOneBy({username})

    if (credentials?.password === password) {
        return credentials.id
    }

    return null
}