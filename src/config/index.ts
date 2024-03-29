import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), "/.env") });

export default {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  accessTokenExpiresOn: process.env.ACCESS_TOKEN_EXPIRATION,
  refreshTokenExpiresOn: process.env.REFRESH_TOKEN_EXPIRATION,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
};
