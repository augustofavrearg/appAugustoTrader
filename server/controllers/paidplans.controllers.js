import PaidPlan from "../models/paidplans.model.js";


export const allPaidPlans = async (req,res) =>{

    const paidPlans = await PaidPlan.findAll();
    res.json(paidPlans)
};

export const createPaidPlan = async (req,res) =>{
    const {planName, planCost} = req.body;

    const newPlan = new PaidPlan({
        planName,
        planCost
    });
    const savedPaidPlan = await newPlan.save();
    res.json(savedPaidPlan);
};

export const updatePaidPlan = async (req,res) =>{};

export const getPaidPlan = async (req,res) =>{};


export const deletePaidPlan = async (req,res) =>{};