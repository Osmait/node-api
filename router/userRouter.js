import { Router } from "express";

import { UserController } from "../controllers/usercontroler.js";

const router = Router()
const users = new UserController()

router.get('/user',users.listarTodos)

router.get('/user/:id',users.ListarUno)

router.post('/user',users.create)

router.put('/user/:id',users.Editar)

router.delete('/user/:id',users.Eliminar)






export default router