import { Request, Response } from "express"
import { getUserByIdService, getUsersService, loginUserService, registerUserService } from "../services/usersServices"
import { IUser } from "../entities/interfaces"
import { User } from "../entities/User"

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService()
        res.status(200).json({
            users
        })
    } catch (error: any) {
        res.status(500).send("Error en el servidor.")
    }
    
}

export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        
        const user: User | null = await getUserByIdService(Number(id))
        
        if (user) {
            res.status(200).json({
                user
            })
        } else {
            throw Error ("Usuario no encontrado.")
        }
    } catch (error: any) {
        if (error.message === "Usuario no encontrado.") {
            res.status(404).send("Usuario no encontrado.")
        } else {
            res.status(500).json({
                message: error.message
            })
        }
    }
}

export const registerUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body
        const registered: boolean = await registerUserService(name, email, birthdate, nDni, username, password)
        res.status(201).send("Usuario registrado satisfactoriamente.")
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const user: User | boolean = await loginUserService(username, password)
        if (user) {
            res.status(200).json({
                login: true,
                user: user
            })
        } else {
            throw Error("Credenciales incorrectas.")
        }
    } catch (error: any) {
        if (error.message === "Credenciales incorrectas.") {
            res.status(400).json({
                message: error.message
            })
        } else {
            res.status(500).json({
                message: error.message
            })
        }
    }
}