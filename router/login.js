import { Router } from "express";
import { Login } from "../controllers/login.js";


const routerLogin = Router()
const useLogin = new Login()


routerLogin.post('/login',useLogin.login)


export default routerLogin