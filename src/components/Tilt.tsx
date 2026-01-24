"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";

const Tilt = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

    const mouseXSpring = useSpring(mouseX);
    const mouseYSpring = useSpring(mouseY);

    const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    const glareTransform = useMotionTemplate`translate(-50%, -50%) translate(${mouseXSpring}px, ${mouseYSpring}px)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mX = e.clientX - rect.left;
        const mY = e.clientY - rect.top;

        const xPct = (mX / width - 0.5) * 25;
        const yPct = (mY / height - 0.5) * -25;

        x.set(yPct);
        y.set(xPct);

        mouseX.set(mX);
        mouseY.set(mY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
        >
            <motion.div
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "200%",
                    height: "200%",
                    background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 80%)",
                    opacity: 0,
                    pointerEvents: "none",
                    zIndex: 10,
                    transform: glareTransform,
                }}
                whileHover={{ opacity: 1 }}
            />
            <div style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d", height: "100%", width: "100%" }}>
                {children}
            </div>
        </motion.div>
    );
};

export default Tilt;
