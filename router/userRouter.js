import { Router } from "express";
import { UserController } from "../controllers/usercontroler.js";

const router = Router()
const users = new UserController()

router.get('/user',users.listarTodos)

router.get('/user',(req,res)=>{
   return res.send("Hello word")
})

router.post('/user',users.create)

router.put('/user',(req,res)=>{
   return res.send("Hello word")
})

router.delete('/user',(req,res)=>{
   return res.send("Hello word")
})






export default router