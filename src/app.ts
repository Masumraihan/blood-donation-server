import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./errors/globalErrorHandler";
import notFoundError from "./errors/notFoundError";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", router);

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFoundError);

export default app;
