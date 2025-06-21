import HeroSection from "../components/heroSection/HeroSection";
import ProjectsComponent from "../components/project/Projects";
import ClientTestimonials from "../components/ClientTestimonials";

export default function Projects() {
  return (
    <div>
      <HeroSection page={"Projects"} />
      <div className="relative mt-[-100px] mb-[-45px] sm:mb-[-60px] lg:mb-[-60px]">
        <ProjectsComponent animate={false} />
      </div>

      <ClientTestimonials />
    </div>
  );
}

