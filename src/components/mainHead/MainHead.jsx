import styles from "./MainHead.module.css";

import { MdLight } from "react-icons/md";

function MainHead({ children }) {
  return (
    <h1
      className={`${styles["main-head"]} font-poppins bg-header relative text-white pt-[2px] pb-[13px] sm:pt-[1px] sm:pb-[10px] text-center sm:text-[25px] md:text-[30px] lg:text-[33px] text-lg uppercase font-[600]`}>
      {children}
      <MdLight className="absolute bottom-[3px] left-[50%] translate-x-[-50%] text-base" />
    </h1>
  );
}

export default MainHead;
