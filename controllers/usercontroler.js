import { User } from "../models/User.js";

export class UserController {
  async create(req, res) {
    const { body } = req;
    const usuario = await User.create(body);
    await usuario.save();

    res.status(200).json({
      msg: "Resgistrado corectamente",
      usuario,
    });
  }

  async listarTodos(req, res) {
    const usuarios = await User.findAll();

    res.status(200).json(usuarios);
  }

  async ListarUno(req, res) {
    const { id } = req.params;
    console.log(id);
    const usuarios = await User.findByPk(id);

    res.status(200).json(usuarios);
  }

  async Editar(req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const usuario = await User.findByPk(id);

    usuario.firstName = firstName;
    usuario.lastName = lastName;

    await usuario.save();
    res.status(200).json({
        msg:"Editado correctamente",
        usuario
    })
  }

  async Eliminar(req, res) {
    const { id } = req.params;
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(204).json({
      msg: "Se a eliminado Correctamente",
    });
  }
}
