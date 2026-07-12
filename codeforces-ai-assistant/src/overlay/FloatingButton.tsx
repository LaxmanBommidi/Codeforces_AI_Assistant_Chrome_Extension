interface FloatingButtonProps {
    onClick: () => void;
}

export default function FloatingButton({
    onClick,
}: FloatingButtonProps) {
    return (
        <button
            className="cf-ai-button"
            onClick={onClick}
        >
            🤖
        </button>
    );
}