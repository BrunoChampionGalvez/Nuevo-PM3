import { Router } from "express";
import { getUserByIdController, getUsersController, loginUserController, registerUserController } from "../controllers/usersController";

const usersRouter = Router()

usersRouter.get("/users", getUsersController)
usersRouter.post("/users/register", registerUserController)
usersRouter.post("/users/login", loginUserController)
usersRouter.get("/users/:id", getUserByIdController)

export default usersRouter