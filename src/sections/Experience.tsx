import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const selectedAnimate = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.8}rem`;
    };

    selectedAnimate();
  }, [selected]);

  const expereinces = [
    {
      name: "FictiveBox ",
      role: "Front-End Developer",
      url: "",
      start: "Feb 2025",
      end: "Present",
      shortDescription: [
        "Built a holistic system for managing tendering, coach manufacturing, purchasing, and billing, ensuring an end-to-end streamlined workflow.",
        "Integrated Formik with Yup for form handling and advanced validations.",

        "Designed and developed a smooth UI for generating AI-driven marketing videos from prompts and images.",
        "Created a custom video player with full playback controls for seamless user experience.",
        "Optimized UI and workflow, contributing to a 10 percent increase in product sales.",
      ],
    },
    {
      name: "SD Campus",
      role: "Front-End Developer",
      url: "https://www.sdcampus.com/",
      start: "Nov 2023",
      end: "Feb 2025",
      shortDescription: [
        "I work on two projects “SD CAMPUS” a learning platform and a “SD STORE” an E-commerce book store website.",
        "Designed and developed a reusable component library for future use, resulting in a 20 percent reduction in development time for new projects.",
        "Collaborated with teams to ensure both projects met user requirements and business goals, delivering high-quality web solutions that drove engagement and sales.",
        "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
      ],
    },
    {
      name: "SleekSites",
      role: "Front-End Developer",
      url: "https://www.flexibench.io/",
      start: "July 2023",
      end: "Oct 2023",
      shortDescription: [
        "Developed and designed responsive web pages for “FlexiBench” and “Roadvison” projects ensuring a clean, user-friendly interface using Angular & React.js.",
        "Implemented smooth, user-centric UI/UX design for both projects.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
  ];

  return (
    <>
      <motion.div
        className="experience"
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        variants={{
          visible: { opacity: 1, y: -80 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <div className="title">
          <h2>
            <span className="code-numbering">02.</span>My Experience
          </h2>
        </div>
        <div className="container">
          <ul className="exp-slider">
            <div className="underline"></div>
            {expereinces.map((item, index) => (
              <li
                key={index}
                className={`exp-slider-item  ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>

          <div className="exp-details-container">
            <div className="exp-details">
              <h3>
                <span>{expereinces[selected].role} at </span>
                <span className="position-company">
                  {" "}
                  <Link href={expereinces[selected].url}>
                    {expereinces[selected].name}
                  </Link>
                </span>
              </h3>
              <p className="exp-start-end-time">
                {expereinces[selected].start} - {expereinces[selected].end}
              </p>

              <ul className="exp-detail-list">
                {expereinces[selected].shortDescription.map(
                  (descrip, index) => (
                    <li key={index} className="descrip-list-item">
                      {descrip}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
