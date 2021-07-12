import path from "path";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "colors";

import { dbConnection } from "../database/config.db";
import { config } from "../config/config";
import {
  authRouter,
  bedsRouter,
  patientsRouter,
  recordsRouter,
  roomsRouter,
  usersRouter,
} from "../routes";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    authRouter: `${config.apiVersion}/auth`,
    bedsRouter: `${config.apiVersion}/beds`,
    patientsRouter: `${config.apiVersion}/patients`,
    recordsRouter: `${config.apiVersion}/records`,
    roomsRouter: `${config.apiVersion}/rooms`,
    uploadsRouter: `${config.apiVersion}/uploads`,
    usersRouter: `${config.apiVersion}/users`,
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
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "../public")));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("tiny"));
  }

  private routes() {
    this.app.use(this.apiPaths.authRouter, authRouter);
    this.app.use(this.apiPaths.bedsRouter, bedsRouter);
    this.app.use(this.apiPaths.patientsRouter, patientsRouter);
    this.app.use(this.apiPaths.recordsRouter, recordsRouter);
    this.app.use(this.apiPaths.roomsRouter, roomsRouter);
    this.app.use(this.apiPaths.usersRouter, usersRouter);
    this.app.get("/*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist/public/index.html"));
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`${"[Server]".blue}: Running on port ${this.port}`);
    });
  }
}

export default Server;
