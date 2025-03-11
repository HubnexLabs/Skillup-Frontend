interface SkillsetCardProps {
  one: string;
  two: string;
  three: string;
}
function SkillsetCard({ one, two, three }: SkillsetCardProps) {
  return (
    <div className="flex flex-col w-full h-auto  p-6 border border-black-100 rounded-xl my-4">
      <div className="w-full font-[Lato] font-semibold lg:text-[16px] text-[10px] lg:leading-[19.2px] leading-[12px] tracking-[0px] lg:mb-2 mb-[2.28px]">
        {one}
      </div>
      <div className="w-full font-Lato font-bold lg:text-4xl text-sm lg:leading-[33.6px] leading-[17px] tracking-[0px] lg:mb-3 mb-[6px]">
        {two}
      </div>
      <div className="font-[Lato] font-medium lg:text-xl text-xs lg:leading-[16.8px] leading-[14.4px] tracking-[0px] text-black-100">
        {three}
      </div>
    </div>
  );
}

export default SkillsetCard;
