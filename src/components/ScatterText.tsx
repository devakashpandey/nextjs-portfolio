"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            style={{ display: "inline-block", cursor: "pointer", position: "relative" }}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        style={{
                            position: "absolute",
                            top: "-60px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "var(--theme-color)",
                            color: "var(--background-color)",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            whiteSpace: "nowrap",
                            zIndex: 10000,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                            pointerEvents: "none"
                        }}
                    >
                        Hey buddy, please remove your hand to collect my name
                    </motion.div>
                )}
            </AnimatePresence>

            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: "inline-block",
                        whiteSpace: "pre",
                        color: "inherit",
                        fontWeight: "inherit",
                    }}
                    animate={
                        isHovered
                            ? {
                                x: (Math.random() - 0.5) * windowSize.w * 0.4,
                                y: (Math.random() - 0.5) * windowSize.h * 0.4,
                                rotate: Math.random() * 720 - 360,
                                scale: Math.random() * 1.5 + 0.8,
                                opacity: [1, 0.8, 1],
                                zIndex: 9999,
                            }
                            : {
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                                opacity: 1,
                                zIndex: 1,
                            }
                    }
                    transition={{
                        type: "spring",
                        stiffness: isHovered ? 30 : 150,
                        damping: isHovered ? 12 : 20,
                        mass: 0.8,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default ScatterText;
