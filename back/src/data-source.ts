import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_TYPE, DB_USERNAME, DB_PORT } from "./config/envs";
import { User } from "./entities/User";
import { Credentials } from "./entities/Credentials";
import { Appointment } from "./entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: Number(DB_PORT) || 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    // dropSchema: true,
    logging: false,
    entities: [User, Appointment, Credentials],
    subscribers: [],
    migrations: [],
})

export const userRepository = AppDataSource.getRepository(User)
export const credentialsRepository = AppDataSource.getRepository(Credentials)
export const appointmentRepository = AppDataSource.getRepository(Appointment)