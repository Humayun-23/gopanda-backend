import express from "express";
import cors from "cors";
import homeRouter from "./routes/home";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/", homeRouter);

export default app;
