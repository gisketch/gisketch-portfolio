import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import Projects from "@/components/home/projects";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="w-full h-full pb-24">
      <Hero />
      <Overview />
      <Projects />
      <About />
      <Testimonials />
    </div>
  );
}
