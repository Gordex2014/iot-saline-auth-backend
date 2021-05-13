import dotenv from "dotenv";

dotenv.config();

export const config = {
  apiVersion: "/api/v1",
  port: process.env.PORT || "8080",
  dbUrl: process.env.MONGODB_CNN || "mongodb://localhost:27017/auth",
};
