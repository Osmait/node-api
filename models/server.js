import express from "express";
import { db } from "../database/db.js";
import router from "../router/userRouter.js";
import routerLogin from "../router/login.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8000;
    this.middlewares();
    this.routers();
    this.dbConnection();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }

  middlewares() {
    this.app.use(express.json());
  }

  routers() {
    this.app.use("/api", router);
    this.app.use("/api", routerLogin);
  }

  async dbConnection() {
    try {
      db.authenticate();
      console.log("DataBase Ready");
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Server;
