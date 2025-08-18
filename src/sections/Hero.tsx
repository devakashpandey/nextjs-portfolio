import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          Hi everyone, my name is
        </motion.h1>
        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.75 }}
        >
          Akash Pandey<span style={{ fontSize: "25px" }}>●</span>
        </motion.h2>
        <motion.h3
          className="hero-title-large hero-title-sub"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.05 }}
        >
          I build things for the web.
        </motion.h3>

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
        >
          A passionate Front-end Developer with 2 years of expertise in
          developing user-friendly, adaptive and responsive websites with
          optimized cross-browser compatibility and runtime performance.{" "}
          <span style={{ color: "var(--light-slate)" }}>
            &quot;I believe web design can be more diverse & inspiring.&quot;
          </span>{" "}
        </motion.p>

        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
        >
          <Button
            text="My Resume"
            link="https://drive.google.com/file/d/15QbIbXN3nhN7vfXLHBW3ZKWUL4KxOMH-/view?usp=drive_link"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
