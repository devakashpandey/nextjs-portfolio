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
            style={{
                display: "inline-block",
                cursor: "pointer",
                position: "relative",
                transition: "all 0.3s ease"
            }}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, x: "-50%" }}
                        style={{
                            position: "absolute",
                            top: windowSize.w < 500 ? "-80px" : "-70px",
                            left: "50%",
                            backgroundColor: "rgba(50, 230, 188, 0.95)",
                            backdropFilter: "blur(12px)",
                            color: "#0a192f",
                            padding: windowSize.w < 500 ? "10px 16px" : "12px 24px",
                            borderRadius: "16px",
                            fontSize: windowSize.w < 500 ? "12px" : "14px",
                            fontWeight: "600",
                            whiteSpace: windowSize.w < 500 ? "normal" : "nowrap",
                            width: windowSize.w < 500 ? "240px" : "max-content",
                            textAlign: "center",
                            zIndex: 10000,
                            boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
                            pointerEvents: "none",
                            letterSpacing: "0px", // Critical fix: Reset inherited letter-spacing
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--fira-code)"
                        }}
                    >
                        Hey buddy, move your hand back to fix my name!
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
                        filter: "blur(0px)",
                    }}
                    animate={
                        isHovered
                            ? {
                                x: (Math.random() - 0.5) * windowSize.w * 0.35,
                                y: (Math.random() - 0.5) * windowSize.h * 0.35,
                                rotate: Math.random() * 720 - 360,
                                scale: Math.random() * 1.8 + 0.5,
                                opacity: [1, 0.4, 0.8],
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
