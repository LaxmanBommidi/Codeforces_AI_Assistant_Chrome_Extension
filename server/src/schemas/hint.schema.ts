import {z} from 'zod';

const problemSchema = z.object( {
    title: z.string(),
    statement: z.string(),
    input: z.string(),
    output: z.string(),
    timeLimit: z.string(),
    memoryLimit: z.string(),
});

const hintRequestSchema = z.object({
    problem : problemSchema
});

export { hintRequestSchema , problemSchema }