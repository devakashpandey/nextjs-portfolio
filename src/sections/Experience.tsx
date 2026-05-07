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
      role: "Software Engineer",
      url: "",
      start: "December 2025",
      end: "Present",
      shortDescription: [
        "Contributed to the development of a scalable multi-tenant seller console using Next.js, TypeScript, and Tailwind CSS, enabling users to seamlessly create and manage their own online stores.",
        "Built and optimized essential e-commerce functionalities including authentication, store onboarding flow, theme and template customization, product management, and advanced store settings such as custom site URL configuration.",
        "Developed a high-performance storefront experience using Qwik with a strong focus on responsive design, fast page rendering, smooth user interactions, and cross-device compatibility.",
        "Engineered a Shopify-inspired website builder and storefront system featuring customizable themes, dynamic layouts, reusable components, and flexible store management capabilities tailored for modern e-commerce businesses."
      ],

    },
    {
      name: "FictiveBox Digital ",
      role: "Software Developer",
      url: "",
      start: "Feb 2025",
      end: "December 2025",
      shortDescription: [
        "Developed and maintained an end-to-end enterprise management platform for tendering, coach manufacturing, procurement, and billing operations, streamlining complex business workflows and improving operational efficiency.",

        "Developed scalable and highly validated dynamic forms using React, Formik, and Yup, ensuring robust data handling, seamless user interactions, and reduced validation errors across the application.",

        "Designed and implemented an AI-powered video generation interface that enabled users to create marketing videos from text prompts and images, improving user engagement and contributing to a 10% increase in product sales through an optimized and intuitive user experience.",

        "Built a custom media player with advanced playback functionality and optimized frontend workflows, enhancing overall user engagement and contributing to measurable growth in product conversions and sales.",
      ],
    },
    {
      name: "SD Campus",
      role: "Front-End Developer",
      url: "https://www.sdcampus.com/",
      start: "Feb 2024",
      end: "Feb 2025",
      shortDescription: [
        "Contributed to the development of “SD CAMPUS”, an online learning platform, and “SD STORE”, an e-commerce bookstore, focusing on scalable architecture and seamless user experience.",

        "Designed and developed a reusable component library to standardize UI development, reducing development time for new features and projects by 20%.",

        "Collaborated closely with cross-functional teams to deliver user-centric solutions aligned with business objectives, improving platform engagement and overall user satisfaction.",

        "Optimized frontend components and application performance to ensure responsive, cross-browser compatible, and consistent experiences across multiple devices.",
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
