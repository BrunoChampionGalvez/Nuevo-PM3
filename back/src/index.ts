import { PORT } from "./config/envs"
import { AppDataSource } from "./data-source";
import server from "./server"


AppDataSource.initialize().then(() => {
    console.log("Database connected.");
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    })
}).catch((error) => {
    console.error(error.message);
})