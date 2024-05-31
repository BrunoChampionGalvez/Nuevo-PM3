import { ICredentials } from "../entities/interfaces";

const credentials: ICredentials[] = []
let id = 1

export const createCredentialsService = (username: string, password: string) => {
    credentials.push({
        id,
        username,
        password
    })

    id++

    return id - 1
}

export const checkCredentialsService = (username: string, password: string) => {
    const newCredentials: ICredentials | undefined = credentials.find(credentials => credentials.username === username)

    if (newCredentials?.password === password) {
        return newCredentials.id
    }

    return undefined
}