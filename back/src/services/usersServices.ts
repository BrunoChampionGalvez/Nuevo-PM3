import { IUser } from "../entities/interfaces"

const users: IUser[] = []

export const getUsersService = () => {
    return users
}

export const getUserByIdService = (id: number) => {
    const user = users.find(user => user.id === id)

    return user
}

export { users }