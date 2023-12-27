import { Router } from "express";
import {login, register} from '../controllers/admin.controllers.js'

const routerAdmin = Router();

routerAdmin.get("/login", login)
routerAdmin.post("/register", register)

export default routerAdmin
 