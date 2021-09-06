import dotenv from "dotenv";

dotenv.config();
//Object destructuring
export const {
  APP_PORT,
  DEBUG_MODE,
  MONGO_URL_TEST_LOCAL,
  JWT_SECRET,
  REFRESH_SECRET,
  MONGO_PROD_TEST,
} = process.env;
