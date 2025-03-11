import GuideCard from "./GuideCard";
import lady from "../../assets/image 102.png";
import ladysmall from "../../assets/image 105.png";
import GuidesCaresoul from "./GuidesCaresoul";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p6 from "../../assets/Image (1).svg";
import p8 from "../../assets/person_outline.svg";
function Guidance() {
  const guides = [
    {
      imageName: p2,
      name: "Jassica Robert",
      role: "UX Designer",
    },
    {
      imageName: p6,
      name: "Carol Sons",
      role: "SDE",
    },
    {
      imageName: p1,
      name: "Robert Jason",
      role: "Analyst",
    },
    {
      imageName: p8,
      name: "Williams Jones",
      role: "Azure",
    },
  ];

  return (
    <div className="lg:my-[120px] flex justify-center items-center ">
      <div className="hidden lg:flex relative justify-center items-center w-[1280px] lg:h-[695px] bg-[#159B76] lg:rounded-[20px] overflow-hidden">
        <div className="absolute top-[20px] lg:top-[62px] lg:left-[69px] flex flex-col lg:gap-[22px] gap-[18px] lg:items-start items-center">
          <button className="lg:px-[12.86px] py-[4.82px] bg-[#21B38C] lg:h-[39px] h-[29.48px] lg:w-[285px] w-[200px] rounded-[20px] lg:gap-[6.429px] gap-[3.103px] flex flex-row items-center justify-center">
            <span className="text-black text-lg text-center leading-[20.733px] w-[16px] h-[21px] font-Lato">
              🎉
            </span>
            <span className="text-white text-[10.861px] not-italic font-bold lg:w-[158px] w-[141.2px] leading-[27.433px] text-center font-Lato">
              Guidance From The Experts
            </span>
          </button>

          <div className="lg:w-[734px] w-full text-center lg:text-start">
            <span className="text-white text-[44px] not-italic font-bold leading-[120%] font-Lato self-stretch">
              Empowering the Future with Artificial Intelligence -
            </span>
            <span className="text-[#005B42] text-[44px] not-italic font-bold leading-[120%] font-Lato">
              where innovation meets possibility!
            </span>
          </div>

          <div className="lg:w-[641px] w-full text-center lg:text-start">
            <span className="text-white text-xl not-italic font-normal leading-[120%] font-Lato self-stretch">
              Earn industry-recognized certificates with each workshop you
              complete, showcasing your expertise and commitment to professional
              excellence.
            </span>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-center w-full">
              <div className="relative flex items-center h-8 lg:h-8 lg:w-28  justify-start">
                <img
                  src={p1}
                  alt="*"
                  className="w-8 h-8 lg:w-8 lg:h-8 rounded-full object-cover border-1 border-white lg:absolute left-0 lg:left-0  top-0"
                />
                <img
                  src={p2}
                  alt="*"
                  className="w-8 h-8 lg:w-8 lg:h-8 rounded-full object-cover border-1 border-white lg:absolute left-6 lg:left-6  top-0 "
                />
                <img
                  src={p3}
                  alt="*"
                  className="w-8 h-8 lg:w-8 lg:h-8 rounded-full object-cover border-1 border-white lg:absolute left-12 lg:left-12 top-0 "
                />
                <img
                  src={p4}
                  alt="*"
                  className="w-8 h-8 lg:w-8 lg:h-8 rounded-full object-cover border-1 border-white lg:absolute left-18 lg:left-[70px] top-0 "
                />
              </div>
              <div className="text-center lg:text-left flex flex-col items-start">
                <h1 className="font-bold text-white text-sm md:text-base lg:text-lg">
                  <span className="inline-block tabular-nums tracking-wider text-white text-base not-italic font-semibold leading-[120%]">
                    32
                  </span>
                  + Guidance
                </h1>
                <p className="text-white text-xs md:text-sm lg:text-base whitespace-nowrap">
                  delivered to the learners
                </p>
              </div>
            </div>
          </div>
          <button className="hidden lg:flex w-[229.5px] h-12 justify-center items-center gap-2 shrink-0 px-4 py-1.5 rounded-[4px] bg-white">
            <span className="text-[#005B42] text-base not-italic font-semibold leading-[22px] font-Lato">
              Enroll in AI
            </span>
            <span className="w-6 h-6 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.25 20.334L10.84 18.924L16.42 13.334L4.25 13.334V11.334L16.42 11.334L10.83 5.75398L12.25 4.33398L20.25 12.334L12.25 20.334Z"
                  fill="#005B42"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="hidden lg:block absolute left-0 bottom-[-0.1px] w-[764px] h-214px">
          <div className="absolute left-0 bottom-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="762"
              height="169"
              viewBox="0 0 762 169"
              fill="none"
            >
              <path
                d="M-0.499018 0.150345C0.668413 6.48801 4.80445 20.114 18.0131 21.2005C31.2217 22.2869 405.767 21.6531 591.388 21.2005C634.5 21.2005 652.428 52.4361 689.453 122.377C697.876 137.831 722.143 167.264 755.049 169.23H762C759.643 169.371 757.326 169.366 755.049 169.23H-0.499018V0.150345Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="hidden lg:block absolute left-20 top-[80%]">
          <div className="text-[rgba(0,_0,_0,_0.60)] font-[Lato] text-[16px] not-italic font-medium leading-[120%] my-3">
            More than 200+ experts trusted us
          </div>
          <GuidesCaresoul guides={guides} />
        </div>
        <div className="hidden lg:block absolute right-2 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="623"
            height="515"
            viewBox="0 0 623 515"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M382.252 597.461C227.92 668.8 85.9883 497.008 9.74247 332.06C-32.9951 239.603 88.6576 189.441 175.164 149.454C323.36 80.9513 512.928 -92.7656 586.142 65.6236C682.823 274.781 577.949 507.002 382.252 597.461Z"
              fill="url(#paint0_linear_27_632)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_27_632"
                x1="645.601"
                y1="194.254"
                x2="69.201"
                y2="460.691"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF8008" />
                <stop offset="1" stopColor="#FFC837" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hidden lg:block absolute right-2 bottom-0 ">
          <img src={lady} className="overflow-hidden" alt="" />
        </div>
        <div className="hidden lg:block absolute right-2 bottom-10">
          <GuideCard img={p1} name="Neha Sharma" role="AI Engineer" />
        </div>
      </div>
      <div className="lg:hidden w-full bg-[#159B76] ">
        <div className="p-[20px] flex flex-col w-full items-center justify-center gap-[18px]">
          <button className="lg:px-[12.86px] py-[4.82px] bg-[#21B38C] lg:h-[39px] h-[29.48px] lg:w-[285px] w-[200px] rounded-[20px] lg:gap-[6.429px] gap-[3.103px] flex flex-row items-center justify-center">
            <span className="text-black text-lg text-center leading-[20.733px] w-[16px] h-[21px] font-Lato">
              🎉
            </span>
            <span className="text-white text-[10.861px] not-italic font-bold lg:w-[158px] w-[141.2px] leading-[27.433px] text-center font-Lato">
              Guidance From The Experts
            </span>
          </button>
          <div className=" w-full text-center">
            <span className="text-white text-[22px] not-italic font-bold leading-[120%] font-Lato self-stretch">
              Empowering the Future with Artificial Intelligence -
            </span>
            <span className="text-[#005B42] text-[22px] not-italic font-bold leading-[120%] font-Lato">
              where innovation meets possibility!
            </span>
          </div>
          <div className="w-full text-center">
            <span className="text-white text-[14px] not-italic font-normal leading-[120%] font-Lato">
              Earn industry-recognized certificates with each workshop you
              complete, showcasing your expertise and commitment to professional
              excellence.
            </span>
          </div>

          <div className="flex flex-row items-center justify-center w-full gap-[13.8px]">
            <div className="relative flex items-center h-8 w-[55px] justify-start">
              <img
                src={p1}
                alt="*"
                className="absolute w-[20.526px] h-[20.526px] rounded-full object-cover border-[2px] border-white left-0  top-0"
              />
              <img
                src={p2}
                alt="*"
                className="absolute w-[20.526px] h-[20.526px] rounded-full object-cover border-[2px] border-white  left-3   top-0 "
              />
              <img
                src={p3}
                alt="*"
                className="absolute w-[20.526px] h-[20.526px] rounded-full object-cover border-[2px] border-white left-6  top-0 "
              />
              <img
                src={p4}
                alt="*"
                className="absolute w-[20.526px] h-[20.526px] rounded-full object-cover border-[2px] border-white left-9  top-0 "
              />
            </div>
            <div className="text-center  flex flex-col items-start">
              <h1 className="font-bold text-white text-sm md:text-base ">
                <span className="inline-block tabular-nums tracking-wider text-white text-base not-italic font-semibold leading-[120%]">
                  32
                </span>
                + Guidance
              </h1>
              <p className="text-white text-sm  whitespace-nowrap">
                delivered to the learners
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[44px] w-full">
          <div className="mb-[20px] p-[20px]">
            <GuideCard img={p1} name="Neha Sharma" role="AI Engineer" />
          </div>
          <div className="relative flex justify-center w-full h-[274px]">
            <img
              src={ladysmall}
              alt="Lady img"
              className="absolute left-[50%] -translate-x-1/2 "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="303"
              height="299"
              viewBox="0 0 303 299"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M186.075 290.664C111.089 325.326 42.1272 241.856 5.08125 161.712C-15.6839 116.789 43.4242 92.4167 85.4558 72.9879C157.461 39.7042 249.567 -44.7006 285.14 32.2569C332.115 133.881 281.159 246.712 186.075 290.664Z"
                fill="url(#paint0_linear_4_4757)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4_4757"
                  x1="314.029"
                  y1="94.7554"
                  x2="33.9707"
                  y2="224.21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF8008" />
                  <stop offset="1" stopColor="#FFC837" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="w-full bg-[#F0F6F0] rounded-t-[30px] z-50 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center my-[10px] bg-white rounded-[30px] px-[10px]">
              <span className="text-[rgba(0,_0,_0,_0.60)] font-[Lato] text-[12px] not-italic font-medium leading-[120%] my-4">
                More than 200+ experts trusted us
              </span>
              <div className="flex flex-col gap-1 my-3">
                {guides.map((guide, index) => (
                  <div key={index}>
                    <GuideCard
                      key={index}
                      img={guide.imageName}
                      name={guide.name}
                      role={guide.role}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[10px] mb-[10px] mx-[10px] flex gap-[13.173px] items-center w-[300px] h-[37px] flex-shrink-0">
              <button className="flex w-[143px] h-[34px] px-[9.58px] py-[3.593px] justify-center items-center gap-[4.79px] flex-shrink-0 rounded-[2.395px] border-[0.599px] border-[solid] border-[#17D059] bg-[#0DBA4B]">
                <span className="text-[#FFF] font-[Lato] text-[12px] not-italic font-semibold leading-[13.173px]">
                  Enroll Now
                </span>
                <span className="w-[14.37px] h-[14.37px]  leading-[13.173px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M7.39553 12.29L6.55128 11.4458L9.89232 8.09877L2.6055 8.09877L2.6055 6.90127L9.89232 6.90127L6.5453 3.56023L7.39553 2.71L12.1855 7.50002L7.39553 12.29Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <button className="flex h-[33px] px-[9.58px] py-[3.593px] justify-center items-center gap-[4.79px] flex-[1_0_0] border-[0.599px] border-[solid] border-[#000]">
                <span className="font-[Lato] text-[10px] not-italic font-medium leading-[13.173px]">
                  Get Free Career Evaluation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guidance;
