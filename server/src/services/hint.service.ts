import { HintResponse } from "../types/hint";
import Problem from "../types/problem";

export async function generateHintsService( problem : Problem ) : Promise<HintResponse> {
    return {
            hint1: "Think about the XOR operation.",
            hint2: "Can one XOR value transform the entire set?",
            hint3: "Try every XOR value from 1 to 1023."
        };
}