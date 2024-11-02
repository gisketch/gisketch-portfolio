import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import Projects from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Projects />
      <About />
    </>
  );
}
