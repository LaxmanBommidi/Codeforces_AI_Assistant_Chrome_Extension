import { useState } from "react";
import type { Problem } from "../types/problem";
import { generateHintsService, type HintsResponse } from "../services/api.service";

interface HintPanelProps {
    problem : Problem,
    isOpen: boolean;
    onClose: () => void;
}

export default function HintPanel({
    problem,
    isOpen,
    onClose,
}: HintPanelProps) {    
    const [loading, setLoading] = useState(false);
    const [hints, setHints] = useState<HintsResponse | null>(null);
    const [selectedHint, setSelectedHint] = useState("");

    async function handleGenerateHints() {
        try {
            setLoading(true);
            const response = await generateHintsService(problem);
            setHints(response);
        }
        catch( error) {
            console.error(error)
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className={`cf-panel ${isOpen ? "open" : ""}`}>
            <div className="cf-header">
                <span>
                    🤖 Codeforces Hint Assistant
                </span>
                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>
            <div className="problem-section">
                <h3>Problem</h3>
                <p>
                    {problem.title}
                </p>
            </div>
            <div className="hint-buttons">
                
                { !hints ? (
                    <button
                        onClick={handleGenerateHints}
                        disabled={loading}
                    >
                        { loading ? "Generating..." : "Generate AI Hints"}
                    </button>
                ) : (
                    <>
                        <button
                            onClick={ () => setSelectedHint(hints.hint1) }
                        >
                            Hint 1
                        </button>
                        <button 
                            onClick={ () => setSelectedHint(hints.hint2) }
                        >
                            Hint 2
                        </button>
                        <button 
                        onClick= { () => setSelectedHint(hints.hint3) }
                        >
                            Hint 3
                        </button>
                    </>
                )}
            </div>
            <div className="hint-viewer">
                <h3>
                    Hint
                </h3>
                <p>
                    {selectedHint || "Click any hint to begin."}
                </p>
            </div>
        </div>
    );
}