import express , { Application } from "express";
import { Routes } from "./routes/routes";
import { APP_CONFIG } from "./config/app.config";

const app:Application = express();

app.use(express.json());
app.use("/api", Routes.getInstance().router)



const PORT = APP_CONFIG.PORT
app.listen(PORT, ()=> {
 console.log(`server is running on port ${PORT}`);
});