import { Server } from "http";
import app from "./app";
import config from "./config";

let server: Server;
const main = () => {
  try {
    server = app.listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();

const existHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
    });
    process.exit(1);
  }
};

process.on("uncaughtException", (error) => {
  console.log(error);
  existHandler();
});
process.on("unhandledRejection", (error) => {
  console.log(error);
  existHandler();
});
