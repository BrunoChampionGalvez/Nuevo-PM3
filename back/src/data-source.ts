import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_TYPE, DB_USERNAME, DB_PORT } from "./config/envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: Number(DB_PORT) || 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    dropSchema: false,
    logging: false,
    entities: [],
    subscribers: [],
    migrations: [],
})