import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import Tilt from "@/components/Tilt";


function Projects() {
  const projectsData = [
      {
      image: "/product_price_tracker.png",
      projectName: "Product Price Tracker",
      projectLink: "https://product-price-drop-tracker.vercel.app/",
      projectDescription:
        "Full-stack product price tracker web app built with Next.js and Supabase, allowing users to track product prices and set custom target alerts. Live prices are fetched using Firecrawl, and a cron job to check prices periodically and send email notifications when prices drop.",
      projectTech: ["NextJs", "Shadcn", "Supabase", "Firecrawl", "Cron-job"],
      projectExternalLinks: {
        github: "https://github.com/devakashpandey/Product-price-tracker",
        externalLink: "",
      },
    },
    {
      image: "/movionix.png",
      projectName: "Movionix",
      projectLink: "https://movionix.netlify.app/",
      projectDescription:
        "A TV Shows & Movies web app where you see the all Trending, Popular, Top Rated TV shows & Movies. See full information like Rating, Details, Actor, Trailer with Skeleton loading & Lazy load image and also filter with Category & Sorting.",
      projectTech: ["React", "Redux", "SASS", "Material UI", "Axios"],
      projectExternalLinks: {
        github: "https://github.com/devakashpandey/T-Movies-Project",
        externalLink: "",
      },
    },
    {
      image: "/crypto.png",
      projectName: "Crypto Tracker",
      projectLink: "https://live-crypto-currency-tracker.netlify.app/",
      projectDescription:
        "A Crypto Currency Tracker in which you can see the market price, 24hr change of top 100 Bitcoins with graph & also have Sign up and Sign in functionality.You can also add to cart the Bitcoin after Log in.",
      projectTech: ["React", "Context API", "Firebase"],
      projectExternalLinks: {
        github:
          "https://github.com/devakashpandey/CryptoCurrency-Tracker-Project",
        externalLink: "",
      },
    },
    {
      image: "/amazon.png",
      projectName: "Amazon Clone",
      projectLink: "https://new-amazon-clone-2023.netlify.app/",
      projectDescription:
        "A Amazon Clone in which we can add products to cart & delete from cart using Redux Toolkit & save the data in Local storage using Redux-Persist. Sign up & Sign in functionality is also here.",
      projectTech: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Firebase",
        "Redux",
      ],
      projectExternalLinks: {
        github: "https://github.com/devakashpandey/Amazon-Clone-Project",
        externalLink: "",
      },
    },
  
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>
          <span className="code-numbering">03.</span>Some Things I’ve Built
        </h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <Tilt>
                    <div className="project-image-overlay"></div>
                    <div className="project-image-container">
                      <Image src={image} fill alt={projectName} quality={100} />
                    </div>
                  </Tilt>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectLink}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
