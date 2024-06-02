import { Router } from "express";
import { getUserByIdController, getUsersController, loginUserController, registerUserController } from "../controllers/usersController";
import auth from "../middlewares/auth";
import validateRegister from "../middlewares/validateRegister";

const usersRouter = Router()

usersRouter.get("/users", getUsersController)
usersRouter.post("/users/register", validateRegister, registerUserController)
usersRouter.post("/users/login", auth, loginUserController)
usersRouter.get("/users/:id", getUserByIdController)

export default usersRouter