import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";

import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";

import GithubStats from "@/components/sections/GithubStats";

import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Journey />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Education />
        <Experience />
        <Contact />

        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}