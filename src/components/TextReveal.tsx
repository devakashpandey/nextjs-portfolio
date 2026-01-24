"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    delay?: number;
}

const TextReveal = ({ text, children, className, delay = 0 }: TextRevealProps) => {
    const [isDone, setIsDone] = React.useState(false);

    return (
        <div style={{ overflow: isDone ? "visible" : "hidden", position: "relative" }}>
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                onAnimationComplete={() => setIsDone(true)}
                transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                    delay,
                }}
                className={className}
            >
                {text || children}
            </motion.div>
        </div>
    );
};

export default TextReveal;
