

import { mountOverlay } from "../overlay";
import type { Problem } from "../types/problem";
import { extractProblem } from "./extractProblem";

console.log("🚀 Content script started");

alert("Injected successfully");

const problem : Problem = extractProblem();

mountOverlay(problem);


