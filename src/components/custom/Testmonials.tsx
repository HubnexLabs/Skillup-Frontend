import bg from "../../assets/Group 39875.svg";
import ReviewCardCarosul from "./ReviewCardCarosul";
function Testmonials() {
  return (
    <div className="my-[120px] flex flex-col items-center gap-[60px]">
      <div className="flex w-[372.8px] p-[17.077px] items-center gap-[27.323px] rounded-[6.831px] bg-[#FFF] [box-shadow:34.154px_23.908px_68.308px_0px_rgba(0,_0,_0,_0.08)]">
        <div className="flex flex-row gap-[3.42px] items-center">
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
          <div className="flex w-[33.727px] h-[33.727px] p-[3.415px] justify-center items-center gap-[17.077px] bg-[#00B57A]">
            <img src={bg} alt="star" />
          </div>
        </div>
        <div className="text-[#868686] font-[Manrope] text-[26px] not-italic font-bold leading-[25.616px]">
          5.0 Rating
        </div>
      </div>
      <div>
        <ReviewCardCarosul />
      </div>
    </div>
  );
}

export default Testmonials;
