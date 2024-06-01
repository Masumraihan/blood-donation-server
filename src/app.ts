import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./middleware/globalErrorHandler";
import notFoundError from "./middleware/notFoundError";

const app: Application = express();

app.use(cors({ origin: ["https://blood-donation-client-rosy.vercel.app", "http://localhost:3000"], credentials: true }));
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
