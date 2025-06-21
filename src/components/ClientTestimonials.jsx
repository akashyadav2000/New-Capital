import { clientTestimonialsData } from "../data/data";
import Container from "./Container";

function ClientTestimonials() {
  return (
    <div className="bg-main text-white py-[30px] md:py-[40px] xl:py-[60px]">
      <Container>
        <div className="flex xl:flex-row flex-col lg:gap-[20px] xl:[5px] gap-[20px] px-5 lg:px-0 font-poppins">
          {clientTestimonialsData.map((el) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                key={el.id}
                className="w-full flex items-center xl:flex-row flex-col lg:text-left text-center ">
                <div
                  className={`lg:pl-[10px] lg:pr-[8px] xl:border-r border-gray hover:border-primary 
                    text-center flex xl:block items-center  `}
                  style={{ transition: "all 100ms ease-in-out" }}>
                  <h2 className="text-[19px] md:text-2xl lg:text-[27px] xl:text-4xl border-r xl:border-0 border-gray pr-5 xl:pr-0">{el.number}</h2>
                  <p className="uppercase text-primary text-[17px]  md:text-[18px] font-medium py-[5px] lg:py-0  pl-5 xl:pl-0 ">
                    {el.title}
                  </p>
                </div>
                {/* Adding some space to the middle one  */}
                <div
                  className={`md:px-[17px] text-[14px] sm:text-[16] md:text-[17px] lg:text-[18.5px] text-justify text-shadow-white ${el.id === 2 ? "lg:pr-[20px]" : ""
                    }`}>
                  {el.description}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default ClientTestimonials;
