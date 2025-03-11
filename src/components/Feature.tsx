import { useDispatch } from "react-redux";

import { showPopup } from "@/feature/popupSlice";
import Skillsetcarsoul from "./Skillsetcarsoul";
const Feature = () => {
  const dispatch = useDispatch();

  const handleFormShow = function () {
    dispatch(showPopup());
  };
  return (
    <div className="w-full h-full lg:h-screen  flex flex-col lg:flex-row items-center justify-center mt-1 lg:mt-[3  0px]">
      <div className="w-full lg:w-1/2 pl-4 lg:h-screen flex items-start lg:justify-between flex-col overflow-hidden">
        <h1 className="text-2xl text-center my-2 lg:text-left mx-auto lg:mx-0 lg:text-5xl text-wrap w-[80%] font-semibold">
          We Offer a <i className="text-green-secondary">Comprehensive</i> Skill
          Set
        </h1>
        <p className=" w-[90%] mx-auto lg:w-[70%] lg:mx-0 text-center lg:text-left font-medium text-lg mt-5">
          Supercharge your career with our expert-led programs, meticulously
          designed to equip you with the most sought-after skills for today’s
          competitive job market.
        </p>
        <button
          className="border-l-4 border-green-primary px-3 py-2 mt-6 mb-10 mx-auto lg:mx-0   flex items-center justify-center gap-2"
          onClick={handleFormShow}
        >
          Enroll Now{" "}
          <span className="bg-green-primary flex items-center justify-center w-6 h-6 rounded-full">
            <img src="/icons/arrright.svg" alt="arrow" />
          </span>
        </button>
        <img
          src="/icons/bgstrings.svg"
          alt="StringBg"
          className="w-[90%] h-auto  hidden object-cover lg:block"
        />
      </div>
      <div className="lg:w-1/2 lg:h-full w-full h-325px lg:px-[39px] lg:py-[48px] px-[18.5px] py-[23px] overflow-hidden">
        <Skillsetcarsoul />
      </div>
    </div>
  );
};

export default Feature;
