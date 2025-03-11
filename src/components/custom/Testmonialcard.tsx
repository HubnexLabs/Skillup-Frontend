interface ReviewCardInterface {
  profile: string;
  name: string;
  role: string;
  comment: string;
}

function ReviewCard({ profile, name, role, comment }: ReviewCardInterface) {
  return (
    <div className="w-[267px]  rounded-[12px] bg-[#FFF] [box-shadow:0px_12px_12px_0px_rgba(0,_0,_0,_0.16)] flex px-[18px] py-[24px] flex-col justify-center items-center gap-[18px]">
      <div className="rounded-[90px] ">
        <img src={profile} className="w-[90px] h-[90px]" alt="" />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-[#646464] font-[Manrope] text-[24px] not-italic font-bold leading-[30px]">
          {name}
        </div>
        <div className="text-[#646464] font-[Manrope] text-[18px] not-italic font-medium leading-[30px]">
          {role}
        </div>
      </div>
      <div className="w-[231px] text-[#8C8C8C] text-center font-[Manrope] text-[18px] not-italic font-normal leading-[27px]">
        {comment}
      </div>
    </div>
  );
}

export default ReviewCard;
