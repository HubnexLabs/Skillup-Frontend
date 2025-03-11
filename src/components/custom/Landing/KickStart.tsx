import { kickStartCard } from "../../../constants/index";
import KickStartCard from "../KickStartCard";
import Slider from "react-slick";
const KickStart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <div className="mt-10 lg:mt-28 w-full h-auto  p-2 ">
      <div className="w-full lg:w-[85%] mx-auto">
        <h1 className="text-[20px] lg:text-4xl font-bold text-center my-3">
          Kickstart Your Career in <i className="text-green-primary">4 Steps</i>
        </h1>
        <p className="w-full text-[14px] lg:w-[89%] text-center text-black-100 mx-auto text-xl my-8">
          Our workshops are designed to deliver tangible results, helping you
          boost your career prospects and achieve your goals. Here's what our
          graduates are saying:
        </p>
      </div>
      <div className="hidden w-full lg:w-[95%] mx-auto h-auto lg:flex items-center justify-between overflow-scroll gap-[45px] no-scrollbar ">
        {kickStartCard.map((card) => (
          <KickStartCard
            img={card.img}
            title={card.title}
            para={card.para}
            tag={card.tag}
            key={card.tag}
            id={card.id}
          />
        ))}
      </div>
      <div className="lg:hidden w-full mx-auto h-auto items-center justify-between overflow-scroll gap-12 no-scrollbar">
        <Slider {...settings}>
          {kickStartCard.map((card) => (
            <KickStartCard
              img={card.img}
              title={card.title}
              para={card.para}
              tag={card.tag}
              key={card.tag}
              id={card.id}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default KickStart;
