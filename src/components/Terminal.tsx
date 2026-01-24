"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS: Record<string, string | (() => void)> = {
    help: "Available commands: bio, skills, experience, contact, clear, exit",
    bio: "Akash Pandey is a software engineer with 3+ years of experience building scalable web apps.",
    skills: "React, Next.js, Redux, SCSS, Node.js, TypeScript, and more.",
    experience: "Worked on various projects including Amazon Clones, Crypto Trackers, and more.",
    contact: "Email: dev.akashpandey@gmail.com | GitHub: @devakashpandey",
};

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>(["Welcome to Akash's Terminal. Type 'help' to start."]);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "`") {
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        const handleToggle = () => setIsOpen((prev) => !prev);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("toggle-terminal", handleToggle);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("toggle-terminal", handleToggle);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.toLowerCase().trim();
        if (!cmd) return;

        if (cmd === "clear") {
            setHistory([]);
        } else if (cmd === "exit") {
            setIsOpen(false);
        } else if (COMMANDS[cmd]) {
            setHistory([...history, `> ${input}`, COMMANDS[cmd] as string]);
        } else {
            setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type 'help' for assistance.`]);
        }
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="terminal-overlay"
                >
                    <div className="terminal-container" onClick={() => inputRef.current?.focus()}>
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="dot red" onClick={() => setIsOpen(false)}></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="terminal-title">akash-pandey — bash</span>
                        </div>
                        <div className="terminal-body">
                            {history.map((line, i) => (
                                <div key={i} className="terminal-line">
                                    {line}
                                </div>
                            ))}
                            <form onSubmit={handleCommand} className="terminal-input-form">
                                <span className="terminal-prompt">$</span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="terminal-input"
                                    autoFocus
                                />
                            </form>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
