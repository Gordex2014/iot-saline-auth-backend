import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "colors";

import { dbConnection } from "../database/config.db";
import { config } from "../config/config";
import { authRouter, userRouter } from "../routes";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    userRoute: `${config.apiVersion}/users`,
    authRouter: `${config.apiVersion}/auth`,
  };

  constructor() {
    this.app = express();
    this.port = config.port;

    this.dbConnect();
    this.middlewares();
    this.routes();
  }

  private async dbConnect() {
    await dbConnection();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("tiny"));
  }

  private routes() {
    this.app.use(this.apiPaths.userRoute, userRouter);
    this.app.use(this.apiPaths.authRouter, authRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`${"[Server]".blue}: Running on port ${this.port}`);
    });
  }
}

export default Server;
