import type { Problem } from "../types/problem";

export function extractProblem(): Problem {

    const problem =
        document.querySelector(".problem-statement");

    if (!problem) {
        throw new Error("Problem not found");
    }

    const title =
        problem
            .querySelector(".title")
            ?.textContent
            ?.trim() ?? "";

    const input =
        problem
            .querySelector(".input-specification")
            ?.textContent
            ?.trim() ?? "";

    const output =
        problem
            .querySelector(".output-specification")
            ?.textContent
            ?.trim() ?? "";

    const timeLimit =
        problem
            .querySelector(".time-limit")
            ?.textContent
            ?.trim() ?? "";

    const memoryLimit =
        problem
            .querySelector(".memory-limit")
            ?.textContent
            ?.trim() ?? "";

    return {
        title,
        statement: problem.textContent?.trim() ?? "",
        input,
        output,
        timeLimit,
        memoryLimit
    };

}