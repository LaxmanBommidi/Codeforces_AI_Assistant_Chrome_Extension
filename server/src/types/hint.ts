import Problem from "./problem";


interface HintRequest {
    problem : Problem;
}

interface HintResponse {
    hint1 : string;
    hint2 : string; 
    hint3 : string;
}


export { HintRequest , HintResponse }