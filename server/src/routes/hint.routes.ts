import { Router } from "express";
import { validate } from "../middlewares/validate.middleware";
import { generateHintsController } from "../controllers/hint.controller";
import { hintRequestSchema } from "../schemas/hint.schema";


const router = Router();

router.post('/' , validate(hintRequestSchema), generateHintsController);

export default router;