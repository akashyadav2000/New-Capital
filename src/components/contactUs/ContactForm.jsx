import { useState, useRef } from "react";
import { formData, contactInfoData } from "../../data/data";
import Container from "../Container";
import Button from "../Button";
import { MdLocalPhone } from "react-icons/md";
import emailjs from "emailjs-com";
import contact from "../../Assets/c2.jpg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  error: "",
  submit: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialState);
  const { name, email, phone, message, error, submit } = values;
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Basic validation for name and email
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "name" && value.length > 35) return;

    if (name === "email" && value.length > 50) return;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !message) {
      setValues({ ...values, error: "Please fill all required fields." });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setValues({ ...values, error: "Please enter a valid email address." });
      return;
    }

    emailjs
      .sendForm(
        "service_th6ccpt",     // Your service ID
        "template_6hjsm34",    // Your template ID
        formRef.current,
        "GmN2B3CpStB5Bf-Ji"    // Your public key
      )
      .then(
        () => {
          setValues({
            ...initialState,
            submit: "Your request was successfully sent.",
          });
          setTimeout(() => setValues(initialState), 4000);
        },
        () => {
          setValues({ ...values, error: "Failed to send message. Try again." });
        }
      );
  };

  return (
    <div className="relative bg-main pt-[40px] sm:pt-[60px] pb-[30px] sm:pb-[40px] mb-[10px] font-poppins">
      <Container>
        <div className="bg-secondary flex md:flex-row flex-col-reverse gap-[30px] px-[25px] py-[25px] xl:px-[50px] xl:py-[30px] p-[20px] rounded-md overflow-hidden">
          {/* Left: Form */}
          <div className="lg:w-2/3 xl:w-1/2 w-full">
            <div className="flex items-center gap-[20px] md:text-left text-center mb-[20px]">
              <div className="bg-primary rounded-md p-[7px] sm:p-[9px] mx-auto md:mx-0">
                <MdLocalPhone className="text-[26px] sm:text-[30px] text-[#141414]" />
              </div>
              <p className="text-white text-justify text-[14.5px] sm:text-[16px] md:text-[17px] hidden sm:block">
                Submit your contact information and any questions you have in mind and we will happily assist you.
              </p>
              <p className="text-white text-justify text-[14.5px] font-[500] block sm:hidden">
                Submit your contact details and any questions you have.
              </p>
            </div>

            <form onSubmit={handleSubmit} ref={formRef}>
              <input
                className="w-full border-none outline-none p-[9px] mb-4 bg-white text-black placeholder:text-gray"
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={handleInputChange}
                required
              />
              <input
                className="w-full border-none outline-none p-[9px] mb-4 bg-white text-black placeholder:text-gray"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleInputChange}
                required
              />
              <PhoneInput
                country={"in"}
                enableSearch
                value={phone}
                placeholder="Phone Number"
                onChange={(value) => setValues({ ...values, phone: value })}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                inputStyle={{
                  width: "100%",
                  height: "45px",
                  borderRadius: "4px",
                  paddingLeft: "52px",
                }}
                containerStyle={{
                  marginBottom: "20px",

                }}
              />
              <textarea
                className="w-full border-none outline-none p-[10px] bg-white placeholder:text-gray resize-none h-[130px] sm:h-[160px] break-words whitespace-pre-wrap mb-4"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={handleInputChange}
                required
              />

              <Button>Submit</Button>

              {error && <p className="mt-[20px] text-red-400">{error}</p>}
              {submit && <p className="mt-[20px] text-primary">{submit}</p>}
            </form>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/3 xl:w-1/2 hidden lg:block">
            <img
              src={contact}
              alt="Contact"
              className="w-full h-full object-cover rounded-md lg:h-[88%]"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-between gap-5 sm:gap-8 md:gap-10 bg-secondary mt-10 py-4 sm:py-5 px-7 md:px-14 rounded-lg">
          {contactInfoData.map((el) => (
            <div key={el.id} className="flex items-center gap-3 w-full sm:w-auto">
              <img
                src={el.image}
                alt={el.title}
                className="rounded-full w-[28px] md:w-[42px]"
              />
              <p className="text-white text-sm sm:text-base font-medium hover:text-primary break-words">
                {el.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ContactForm;
