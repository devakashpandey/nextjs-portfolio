"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const GlitchText = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ position: "relative", display: "inline-block" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.span
                animate={isHovered ? {
                    x: [0, -2, 2, -2, 2, 0],
                    y: [0, 1, -1, 1, -1, 0],
                    filter: [
                        "none",
                        "drop-shadow(-2px 0 #ff00c1) drop-shadow(2px 0 #00fff9)",
                        "drop-shadow(2px 0 #ff00c1) drop-shadow(-2px 0 #00fff9)",
                        "none",
                    ],
                } : {}}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
