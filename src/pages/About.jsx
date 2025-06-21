
import AboutUs from "../components/about/AboutUs";
import ClientTestimonials from "../components/ClientTestimonials";
import HeroSection from "../components/heroSection/HeroSection";

function About() {
  return (
    <div>
      <HeroSection page={"About"} />
      <div className="relative mt-[-100px] mb-[-45px] sm:mb-[-60px] lg:mb-[-60px]">
        <AboutUs />
      </div>

      <ClientTestimonials />
    </div>
  );
}

export default About;
