import { MdOutlineArrowRightAlt } from "react-icons/md";

function Button({ children }) {
  return (
    <button
      style={{ transition: "all 300ms ease-in-out" }}
      className="main-btn bg-black sm:py-[7px] sm:px-[20px] py-[5px] px-[15px] border-[2px] border-[#dcac36] text-white hover:border-black hover:text-black
    hover:bg-[#dcac36] text-[12px] sm:text-sm font-medium flex items-center gap-[5px] overflow-hidden cursor-pointer font-roboto-serif">
      {children}

      <div
        className="arrow relative right-[-50%] hidden"
        style={{ transition: "all 300ms ease-in-out" }}>
        <MdOutlineArrowRightAlt className="text-xl" />
      </div>
    </button>
  );
}

export default Button;
