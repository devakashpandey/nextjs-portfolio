"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
const Navbar = () => {
  const [navVisible, setNavVisible] = useState(true);
  const [responsiveNav, setResponsiveNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  // 🔹 Close mobile nav on link click
  useEffect(() => {
    const links = document.querySelectorAll(".nav-item-list-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNav(false));
    });

    const html = document.querySelector("html");
    html?.addEventListener("click", () => setResponsiveNav(false));

    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => e.stopPropagation());

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => setResponsiveNav(false));
      });
    };
  }, []);


  useEffect(() => {
    const main = document.querySelector("main");
    const body = document.body;

    if (responsiveNav) {
      main?.classList.add("blur");
      body.classList.add("nav-open");
    } else {
      main?.classList.remove("blur");
      body.classList.remove("nav-open");
    }
  }, [responsiveNav]);


  return (
    <nav className={`navbar ${navVisible ? "show" : "hide"}`}>
      <div className={`wrapper ${responsiveNav ? "blur-nav" : ""}`}>
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="https://iamakashpandey.netlify.app" target="_akash">
            <Logo />
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.div
          className="responsive-nav-toggle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {responsiveNav ? (
            <IoClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNav(false);
              }}
            />
          ) : (
            <MdOutlineMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNav(true);
              }}
            />
          )}
        </motion.div>

        {/* Menu items */}
        <div className={`${responsiveNav ? "nav-responsive" : ""} nav-items`}>
          <ul className="nav-item-ul">
            {menus.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-item-list"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.2 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-item-list-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
