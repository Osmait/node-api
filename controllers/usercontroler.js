import { User } from "../models/User.js";
import bcrypt from 'bcryptjs'

export class UserController {
  async create(req, res) {
    const { firstName, lastName, password, email } = req.body;

    const usuario = new User({firstName,lastName,password,email})
    
   // email validation 

   const emailExist =await User.findOne({where:{ email}})
 

  
    if(emailExist){
      return  res.status(400).json({
        msg:'este email ya fue registrado'
      })
      
    }


    // Encriptar password
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password,salt);

    await usuario.save()


    res.status(200).json({
      msg: "Resgistrado corectamente",
     
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
      msg: "Editado correctamente",
      usuario,
    });
  }

  async Eliminar(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);

      if (!usuario) {
        res.status(404).json({
          msg: "No se a encontrado el usuario",
        });
        return;
      }
      await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        msg:"Se a eliminado Correctamente",
        id,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
