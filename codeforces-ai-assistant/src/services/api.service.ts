import type { Problem } from "../types/problem";


export interface HintsResponse {
    hint1 : string;
    hint2 : string;
    hint3 : string;
}

export async function generateHintsService( problem : Problem ) : Promise<HintsResponse> {
    
    const response = await fetch( 
        "https://codeforces-ai-assistant-chrome-exte-mocha.vercel.app/api/hints",
        {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({problem,}),
        }
    );

    if( !response.ok ) {
        throw new Error("Failed to generate hints");
    }

    return response.json();
}