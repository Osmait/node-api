import { User } from "../models/User.js"
 
 export class UserController{

   async create(req,res){
        
        
        // const usuario = new User(body)
        // await usuario.save()


       
    }

  async  listarTodos(req,res){
      const  usuarios = await User.findAll()

      res.status(200).json(usuarios)
    }

    ListarUno(){
        console.log('listado uno ')
    }

    Editar(){
        console.log('Editando... ')
    }

    Eliminar(){
        console.log('Eliminando... ')
    }
}