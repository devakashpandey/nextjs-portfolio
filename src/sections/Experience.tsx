import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const selectedAnimate = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      if (underline) {
        underline.style.top = `${selected * 2.8}rem`;
      }
    };

    selectedAnimate();
  }, [selected]);

  const experiences = [
    {
      name: "Quichub Innovations",
      role: "Software Developer",
      url: "",
      start: "December 2025",
      end: "Present",
      shortDescription: [
        "Worked on a seller console built using Next.js, TypeScript, and Tailwind CSS, allowing users to log in and create their own online stores.",
        "Implemented core features such as store creation flow, template and theme selection, product management, and settings including site URL configuration.",
        "Developed the storefront (main website) using Qwik, focusing on responsive UI, smooth user experience, and performance across devices."
      ],

    },
    {
      name: "FictiveBox Digital ",
      role: "Front-End Developer",
      url: "",
      start: "Feb 2025",
      end: "December 2025",
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
      role: "Front-End React Developer",
      url: "https://www.sdcampus.com/",
      start: "Oct 2023",
      end: "Feb 2025",
      shortDescription: [
        "I work on two projects “SD CAMPUS” a learning platform and a “SD STORE” an E-commerce book store website.",
        "Designed and developed a reusable component library for future use, resulting in a 20 percent reduction in development time for new projects.",
        "Collaborated with teams to ensure both projects met user requirements and business goals, delivering high-quality web solutions that drove engagement and sales.",
        "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
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
            {experiences.map((item, index) => (
              <li
                key={index}
                className={`exp-slider-item  ${index === selected && "exp-slider-item-selected"
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
                <span>{experiences[selected].role} at </span>
                <span className="position-company">
                  {" "}
                  <Link href={experiences[selected].url}>
                    {experiences[selected].name}
                  </Link>
                </span>
              </h3>
              <p className="exp-start-end-time">
                {experiences[selected].start} - {experiences[selected].end}
              </p>

              <ul className="exp-detail-list">
                {experiences[selected].shortDescription.map(
                  (descrip, index) => (
                    <motion.li
                      key={index}
                      className="descrip-list-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                    >
                      {descrip}
                    </motion.li>
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
