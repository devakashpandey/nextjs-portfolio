"use client";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { SocialIcons } from "@/components/SocialIcons";
import "@/scss/index.scss";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Terminal from "@/components/Terminal";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import { Raleway, Fira_Code, Outfit } from "next/font/google";
import { useState } from "react";

const raleway = Raleway({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800", "600"] });
const firacode = Fira_Code({
  subsets: ["latin"],
  weight: ["700", "600", "500", "400", "300"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoader = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div>
      <style jsx global>{`
        :root {
          --raleway: ${raleway.style.fontFamily};
          --outfit: ${outfit.style.fontFamily};
          --fira-code: ${firacode.style.fontFamily};
        }
      `}</style>

      {showContent && (
        <SmoothScroll>
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          <SocialIcons />
          <Email />
          <Terminal />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </SmoothScroll>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoader} />
    </div>
  );
}
