import { Link } from "react-router-dom";
import { projectsData } from "../../data/data";
import Button from "../Button";
import Container from "../Container";

export default function Projects({ animate = true }) {
  return (
    <div className="bg-main text-white font-poppins pt-[22px] sm:pt-[30px] pb-[40px] sm:pb-[60px]">
      <Container>
        <div>
          <h3 className="text-center uppercase font-[600] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-[15px] px-4">
            Discover a Broad Range Of Units That Will Suit Your Needs
          </h3>

          <div className="flex items-start gap-[40px] flex-wrap mt-[22px] sm:mt-[40px] mx-auto">
            {projectsData.map((p) => {
              return (
                <div
                  key={p.id}
                  {...(animate && {
                    "data-aos": "fade-up",
                    "data-aos-duration": "900",
                  })}
                  className="bg-secondary hover:bg-[#565656] md:w-[calc(50%-20px)] w-full sm:min-h-[430px] min-h-[320px]"
                >
                  <img
                    src={p.image}
                    alt={p.description}
                    className="w-full sm:h-[300px] h-[210px] object-cover"
                  />
                  <div className="sm:py-[13px] sm:px-[20px] py-[10px] px-[15px]">
                    <h4 className="uppercase text-[16px] sm:text-[17px] md:text-[18px] lg:text-xl font-[600]">{p.title}</h4>
                    <p className="mt-[3px] mb-[8px] sm:mt-[4px] sm:mb-[10px] text-gray-200 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-justify font-[500]">
                      {p.description}
                    </p>
                    <Link to={p.to} className="inline-block">
                      <Button>See More!</Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

