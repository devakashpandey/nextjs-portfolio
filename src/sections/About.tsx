import Image from "next/image";
import React from "react";
import myPic from "../../public/my.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        {" "}
        <h2>
          <span className="code-numbering">01.</span> About Me
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-info">
          <p className="about-info-text">



            Hello! I&apos;m{" "}
            <span style={{ color: "var(--theme-color)" }}>Akash Pandey</span>, A Software Engineer experienced in developing scalable and user-focused web applications, ensuring reliable performance across modern browsers.
            Has experience leading teams and collaborating with clients. Leverages AI-assisted tools to enhance development efficiency while following clean coding and structured design practices.
          </p>
          <p className="about-info-text">
            My journey in web development began in{" "}
            <span style={{ color: "var(--theme-color)" }}>2023</span>, after completing my BCA. Since then, I have continuously upskilled through
            self-learning and professional training from Unacademy.
          </p>

          <p className="about-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-info-list">
            <li className="about-info-list-item">JavaScript</li>
            <li className="about-info-list-item">React</li>
            <li className="about-info-list-item">Next.js</li>
            <li className="about-info-list-item">Redux Toolkit</li>
            <li className="about-info-list-item">Zustand</li>
            <li className="about-info-list-item">Tailwind CSS</li>
            <li className="about-info-list-item">Typescript</li>
            <li className="about-info-list-item">Shadcn UI</li>
            <li className="about-info-list-item">React Three Fiber</li>
            <li className="about-info-list-item">Node js</li>
            <li className="about-info-list-item">Express js</li>
            <li className="about-info-list-item">MongoDB</li>
            <li className="about-info-list-item">PostgreSQL</li>
            <li className="about-info-list-item">Mongoose</li>
            <li className="about-info-list-item">Supabase</li>
            <li className="about-info-list-item">REST APIs</li>
            <li className="about-info-list-item">Framer Motion</li>
            <li className="about-info-list-item">Redis</li>
            <li className="about-info-list-item">GraphQL</li>
            <li className="about-info-list-item">Git</li>
            <li className="about-info-list-item">Vercel</li>
            <li className="about-info-list-item">Render</li>




            <li className="about-info-list-item">AI-Driven Development</li>

          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="about-grid-photo-container">
            <Image src={myPic} alt="mypic" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
