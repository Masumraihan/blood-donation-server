import app from "./app";
import config from "./config";

let server;
try {
  server = app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
} catch (error) {
  console.log(error);
}
