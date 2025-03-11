interface IProp {
  tag: string;
  para: string;
  img: string;
  id: number;
  title: string;
}

const KickStartCard = ({ img, title, para, tag, id }: IProp) => {
  return (
    <div
      className={`w-[206.32px] h-[242px] lg:w-[286px] lg:h-[335px] border-none pl-4 pr-4 rounded-2xl lg:rounded-3xl border flex flex-col justify-start items-start ${
        id === 2
          ? "bg-green-light text-green-primary"
          : "bg-green-primary text-white"
      } overflow-hidden`}
    >
      <div className="w-full h-full scale-up transition-all flex flex-col justify-between ">
        <div>
          <h3 className="font-base mt-2 lg:mt-4 ">{tag}</h3>
          <h1 className="my-2 lg:my-4 text-2xl lg:text-3xl font-bold pr-4">
            <p
              className={`${
                id === 2
                  ? "bg-green-light text-green-primary"
                  : "bg-green-primary text-white"
              } `}
            >
              {title}
            </p>
          </h1>
          <p className="line-clamp-4">{para}</p>
        </div>
        <img src={img} alt="image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default KickStartCard;
