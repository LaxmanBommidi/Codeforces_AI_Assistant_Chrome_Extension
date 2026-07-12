import { generateHintsService } from "../services/hint.service";
import { Request , Response } from "express";

export const generateHintsController = async (req : Request,res : Response) => {
    
    const {problem} = req.body;
    const hints = await generateHintsService(problem);

    res.json(hints);
}
