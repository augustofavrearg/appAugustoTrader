import { Router } from "express";
import {login, register} from '../controllers/user.controllers.js'

const routerUser = Router();

routerUser.get("/userLogin", login)
routerUser.post("/userRegister", register)

export default routerUser
