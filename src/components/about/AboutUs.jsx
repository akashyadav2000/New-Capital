import photo1 from "../../Assets/office-1.jpg";
import photo2 from "../../Assets/visionn.jpg";
import { aboutUsData } from "../../data/data";
import Container from "../Container";

function AboutUs() {
  return (
    <div className="relative bg-main font-poppins pt-0 sm:pt-[10px] pb-[40px] sm:pb-[60px]">
      <Container>
        <div className="text-white">
          <div className="my-[40px] sm:my-[45px] space-y-8 md:space-y-[50px]">
            {/* Who We Are Section */}
            <div
              data-aos="flip-left"
              className="flex flex-col md:flex-row bg-secondary md:max-h-[350px]">
              <img
                src={photo1}
                alt="office"
                className="w-full md:w-[50%] object-cover"
              />

              <div className="flex justify-center flex-col px-5 py-3 sm:p-6 md:p-[50px]">
                <h2 className="sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[16.5px] uppercase font-[600] mb-1 md:mb-[10px]">
                  Who We Are
                </h2>
                <p className="text-shadow-white text-justify text-[14.5px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] font-[400]">
                  New Capital is a real estate consultancy company proudly
                  serving thousands of satisfied clients and partnering with the
                  top real estate developers in Egypt.
                </p>
              </div>
            </div>

            {/* Our Vision Section */}
            <div
              data-aos="flip-right"
              className="flex flex-col md:flex-row bg-[#222222] md:max-h-[350px]">
              <div className="flex justify-center flex-col px-5 py-3 sm:p-6 md:p-[50px] order-2 md:order-1">
                <h2 className="sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[16.5px] uppercase font-[600] mb-1 md:mb-[10px]">
                  Our Vision
                </h2>
                <p className="text-shadow-white text-justify text-[14.5px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] font-[400]">
                  Achieve the highest possible standards in the real estate
                  field while establishing our company as the preferred real
                  estate consultancy in Egypt.
                </p>
              </div>

              <img
                src={photo2}
                alt="vision"
                className="w-full md:w-[50%] object-cover order-1 md:order-2"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row pt-0 sm:pt-2">
          {aboutUsData.map((el) => {
            return (
              <div
                key={el.id}
                style={{ background: `${el.bgColor}` }}
                className="text-center py-[15px] md:p-[25px]">
                <img src={el.image} alt={el.description} className="mx-auto w-[50px] sm:w-[60px] md:w-[70px]" />
                <h2 className="md:text-[20px] xl:text-[21px] text-[18px] text-white md:text-2xl font-bold uppercase my-2 md:my-[20px]">
                  {el.title}
                </h2>
                <p className="text-white text-justify mx-auto max-w-[90%] md:max-w-full lg:max-w-[500px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-[14.5px]">
                  {el.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AboutUs;