import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

export class Login {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        msg: "Email o password incorrecto",
      });
    }
    // Comprobando password
    const validpassword = bcrypt.compareSync(password, user.password);

    if (email !== user.email || !validpassword) {
      return res.status(404).json({
        msg: "Email o password incorrecto",
      });
    }

    res.status(200).json({
      msg: "Login exito",
    });
  }
}
