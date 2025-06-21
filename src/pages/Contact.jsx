import ContactForm from "../components/contactUs/ContactForm";

import HeroSection from "../components/heroSection/HeroSection";

function Contact() {
  return (
    <div>
      <HeroSection page={"Contact"} />
      <div className="relative mt-[-100px]">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
