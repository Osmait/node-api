import express from "express";
import { sequelize } from "./database/db.js";
import router from "./router/userRouter.js";

const app = express();
const PORT = 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("conecction Ready");

    app.use("/api", router);

    app.listen(PORT, () => {
      console.log(`Server On Port ${PORT}`);
    });
  } catch (error) {
    console.error(err);
  }
}
main();
