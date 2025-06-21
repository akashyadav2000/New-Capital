import HeroSection from "../components/home/HeroSection";
import ClientTestimonials from "../components/ClientTestimonials";
import ProjectsSection from "../components/project/ProjectsSection";
import AboutUsSection from "../components/about/AboutUsSection";
import ContactFormSection from "../components/contactUs/ContactFormSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <ClientTestimonials />
      <ProjectsSection />
      <AboutUsSection />
      <ContactFormSection />
    </div>
  );
}

export default Home;
