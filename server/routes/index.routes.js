import { Router } from "express";
import {userLogin} from '../controllers/user.controllers.js'

const router = Router();

router.get("/userLogin", userLogin)

export default router
