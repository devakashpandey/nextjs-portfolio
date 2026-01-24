import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import ScatterText from "@/components/ScatterText";
import TextReveal from "@/components/TextReveal";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <motion.div
          className="status-pill"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="pulsing-dot"></span>
          Available for new opportunities
        </motion.div>
        <TextReveal
          text="Hi everyone, my name is"
          className="hero-title"
          delay={0.6}
        />
        <div className="hero-title-large">
          <TextReveal className="hero-name-container" delay={0.75}>
            <ScatterText text="Akash Pandey." />
          </TextReveal>
        </div>
        <TextReveal
          text="I build things for the web."
          className="hero-title-large hero-title-sub"
          delay={1.05}
        />

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
        >
          A Software Developer with over 3 years of experience developing
          responsive and user-focused web applications, with optimized
          cross-browser compatibility and runtime performance. <br />
          <span style={{ color: "var(--light-slate)" }}>
            &quot;I believe web development can be more diverse &
            inspiring.&quot;
          </span>{" "}
        </motion.p>

        <motion.div
          className="hero-button"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.35 }}
        >
          <Magnetic>
            <Button
              text="My Resume"
              link="https://drive.google.com/file/d/15QbIbXN3nhN7vfXLHBW3ZKWUL4KxOMH-/view?usp=drive_link"
            />
          </Magnetic>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
