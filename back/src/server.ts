import morgan from "morgan"
import cors from "cors"
import express from "express"
import router from "./routes/indexRouter"

const server = express()

server.use(morgan("dev"))
server.use(cors())
server.use(express.json())

server.use("/", router)

export default server