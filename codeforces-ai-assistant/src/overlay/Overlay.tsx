import { useState } from "react";
import FloatingButton from "./FloatingButton";
import HintPanel from "./HintPanel";
import type { Problem } from "../types/problem";

interface OverlayProp {
    problem : Problem
}

export default function Overlay( { problem } : OverlayProp ) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <FloatingButton
                onClick={() => setIsOpen(prev => !prev)}
            />

            <HintPanel
                problem = {problem}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}