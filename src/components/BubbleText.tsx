import React from "react";
import styles from "../assets/bubble.module.css";
import { twMerge } from "tailwind-merge";

interface BubbleTextProps {
    text: string;
    className?: string;
}

export const BubbleText: React.FC<BubbleTextProps> = ({ text, className }) => {
    return (
        <h2 className={twMerge("text-center text-5xl font-thin text-indigo-300", className)}>
            {text.split("").map((char, idx) => (
                <span className={styles.hoverText} key={idx}>
                {char}
                </span>
            ))}
        </h2>
    );
};

const BubbleComponent: React.FC = () => {
    return (
        <div>
            {/* Pass any text you want to display */}
            <BubbleText text="Bubbbbbbbble text" />
        </div>
    );
};

export default BubbleComponent;
