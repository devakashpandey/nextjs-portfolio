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
          <TextReveal className="hero-name-container" delay={0.75} >
            <ScatterText text="Akash Pandey." />
          </TextReveal>
        </div>
        <TextReveal
          text="I build scalable digital products."
          className="hero-title-large hero-title-sub"
          delay={1.05}

        />

        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 1.2 }}
        >
          A Full Stack Software Engineer passionate about building scalable, high-performance web applications and seamless digital experiences with modern technologies and clean architecture. <br />
          <span style={{ color: "var(--light-slate)" }}>
            &quot;Turning ideas into scalable products through clean code and thoughtful design.&quot;
          </span>{" "}
          <br />
          <br />
          Building{" "}
          <a
            href="https://www.akkylabs.com/"
            target="_blank"
            rel="noreferrer"
            className="link"
            style={{ color: "var(--theme-color)", fontWeight: "semibold" }}
          >
            @AkkyLabs
          </a>
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
