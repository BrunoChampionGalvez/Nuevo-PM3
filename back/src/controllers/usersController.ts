import { Request, Response } from "express"
import { getUserByIdService, getUsersService, loginUserService, registerUserService } from "../services/usersServices"
import { IUser } from "../entities/interfaces"

export const getUsersController = (req: Request, res: Response) => {
    const users: IUser[] = getUsersService()
    res.status(200).json({
        users: users
    })
}

export const getUserByIdController = (req: Request, res: Response) => {
    const { id } = req.params
    
    const user: IUser |undefined = getUserByIdService(Number(id))
    res.status(200).json({
        user: user
    })
}

export const registerUserController = (req: Request, res: Response) => {
    const { id, name, email, birthdate, nDni, username, password } = req.body
    registerUserService(id, name, email, birthdate, nDni, username, password)
    res.status(201).send("Usuario registrado satisfactoriamente.")
}

export const loginUserController = (req: Request, res: Response) => {
    const { username, password } = req.body
    const user: IUser | undefined = loginUserService(username, password)
    res.status(200).json({
        user: user
    })
}