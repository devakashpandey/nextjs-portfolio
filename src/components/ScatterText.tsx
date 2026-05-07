"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScatterText = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [windowSize, setWindowSize] = useState({ w: 1000, h: 800 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ w: window.innerWidth, h: window.innerHeight });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const characters = text.split("");

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                display: "inline-block",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease"
            }}
        >


            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        color: "inherit",
                        fontWeight: "inherit",
                        filter: "blur(0px)",
                    }}
                    animate={
                        isHovered
                            ? {
                                x: (Math.random() - 0.5) * windowSize.w * 0.18,
                                y: (Math.random() - 0.5) * windowSize.h * 0.18,
                                rotate: Math.random() * 360 - 180,
                                scale: Math.random() * 1.2 + 0.8,
                                opacity: [1, 0.6, 1],
                                filter: "blur(0.5px)",
                                zIndex: 9999,
                            }
                            : {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                opacity: 1,
                                filter: "blur(0px)",
                                zIndex: 1,
                            }
                    }
                    transition={{
                        type: "spring",
                        stiffness: isHovered ? 25 : 180,
                        damping: isHovered ? 15 : 25,
                        mass: 0.6,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default ScatterText;
