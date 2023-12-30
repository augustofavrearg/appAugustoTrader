import { Router } from "express";
import {deletePaidPlan, createPaidPlan, updatePaidPlan, getPaidPlan, allPaidPlans} from '../controllers/paidplans.controllers.js'

const routerPaidPlans = Router();

routerPaidPlans.delete("/delete/:id", deletePaidPlan)
routerPaidPlans.post("/create", createPaidPlan)
routerPaidPlans.get("/get/:id", getPaidPlan)
routerPaidPlans.put("/update/:id", updatePaidPlan)
routerPaidPlans.get("/paidplans", allPaidPlans)

export default routerPaidPlans
 