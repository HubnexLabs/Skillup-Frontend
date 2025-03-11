import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GuideCard from "./GuideCard";

interface Guide {
  imageName: string;
  name: string;
  role: string;
}

interface GuidesCaresoulProps {
  guides: Guide[];
}
function GuidesCaresoul({ guides }: GuidesCaresoulProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 2, // Display three slides to ensure the center one is fully visible
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current: any) => setCurrentSlide(current),
  };
  return (
    <Slider {...settings}>
      {guides.map((guide, i) => (
        <div
          key={i}
          className={`flex flex-col gap-1 my-3 slide ${
            i === currentSlide ? "active" : "inactive"
          }`}
        >
          <GuideCard
            key={i}
            img={guide.imageName}
            name={guide.name}
            role={guide.role}
          />
        </div>
      ))}
    </Slider>
  );
}

export default GuidesCaresoul;
