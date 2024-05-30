import { Request, Response } from "express"

export const getUsersController = (req: Request, res: Response) => {
    res.status(200).send("getUsersController funcionando.")
}

export const getUserByIdController = (req: Request, res: Response) => {
    res.status(200).send("getUserByIdController funcionando.")
}

export const registerUserController = (req: Request, res: Response) => {
    res.status(201).send("registerUserController funcionando.")
}

export const loginUserController = (req: Request, res: Response) => {
    res.status(200).send("loginUserController funcionando.")
}