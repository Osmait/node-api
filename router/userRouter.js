import { Router } from "express";

const router = Router()


router.get('/user',(req,res)=>{
   return res.send("Hello word")
})





export default router