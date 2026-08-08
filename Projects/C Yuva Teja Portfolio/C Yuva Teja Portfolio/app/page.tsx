import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import GithubShowcase from "@/components/GithubShowcase";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <Projects />
      <Experience />
      <Timeline />
      <GithubShowcase />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
