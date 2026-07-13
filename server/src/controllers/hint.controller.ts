import { ok } from "node:assert";
import { generateHintsService } from "../services/hint.service";
import { Request , Response } from "express";

export const generateHintsController = async (req : Request,res : Response) => {
    
    try{
        const {problem} = req.body;
        const hints = await generateHintsService(problem);

        res.json(hints).status(200);
    }
    catch(error) 
    {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Internal Server Error",
        });
    }
}
