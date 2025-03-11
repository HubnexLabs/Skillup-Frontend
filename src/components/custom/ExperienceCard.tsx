import NumberTicker from "../magicui/number-ticker";

interface IProp {
  tag?: string;
  number?: number;
  sign?: string;
  para: string;
  img: string;
  id: number;
  title?: string;
}
const ExperienceCard = ({ img, number, para, sign, tag, id, title }: IProp) => {
  return (
    <div
      className={`w-[206.32px] h-[242px] lg:w-[347px] lg:h-[407px] border-none pl-4 pr-4 rounded-2xl lg:rounded-3xl border flex flex-col justify-start items-start ${
        id === 2
          ? "bg-green-light text-green-primary"
          : "bg-green-primary text-white"
      } overflow-hidden`}
    >
      <div className="w-full h-full scale-up transition-all flex flex-col justify-between lg:justify-between ">
        <div>
          <h3 className="font-base mt-2 lg:mt-4 text-[12px] lg:[13.5px]">
            {tag}
          </h3>
          <h1 className="my-2 lg:my-4 text-[28px] lg:text-5xl font-bold">
            {number && (
              <NumberTicker
                value={number}
                className={`${
                  id === 2
                    ? "bg-green-light text-green-primary"
                    : "bg-green-primary text-white"
                }`}
              />
            )}
            {sign}
          </h1>
          <p className="hidden md:line-clamp-4 text-[12px] lg:text-[15px]">
            {para}
          </p>
          <p className="flex md:hidden text-[12px] lg:[15px] pr-7 font-semibold">
            {title}
          </p>
        </div>
        <img src={img} alt="image" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default ExperienceCard;
