import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";

const router = Router()

router.use("/", usersRouter)
router.use("/", appointmentsRouter)

export default router