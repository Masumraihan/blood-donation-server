import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./errors/globalErrorHandler";

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
app.use(function (req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: "Route not found",
    url: req.originalUrl,
  });
});

export default app;
