import SkillsetCard from "./SkillsetCard";
import Slider from "react-slick";
function Skillsetcarsoul() {
  const skillset = [
    {
      one: "Exclusive Access to Our",
      two: "Global Alumni Network",
      three:
        "Connect with an expansive network of successful professionals across the globe. Our alumni are placed in top organizations, and as a Hubnex Skillup member, you gain access to this valuable community.",
    },
    {
      one: "Hands-On Learning with",
      two: "Real-time Project",
      three:
        "Enhancing your CV with adding real-world projects that challenge you to apply your learning immediately.",
    },
    {
      one: "Cutting-Edge",
      two: "Tech Skills",
      three:
        "Stay ahead of the curve with workshops in AI, Machine Learning, Data Science, and Cloud Computing. Learn the latest technologies that are shaping the future of industries worldwide.",
    },
    {
      one: "Develop",
      two: "Creative & Design Skills",
      three:
        "Unlock your creative potential with our design workshops. From Graphic Design to UI/UX Design, learn the tools and techniques needed to create stunning visuals and user experiences.",
    },
    {
      one: "100%",
      two: "Job Placement / Assistent",
      three:
        "Our unwavering commitment to excellence ensures that you receive top-notch education and support. If you're not fully satisfied with our workshops, we offer a hassle-free money-back guarantee.",
    },
    {
      one: "100%",
      two: "Satisfaction or Your Money Back",
      three:
        "Our unwavering commitment to excellence ensures that you receive top-notch education and support. If you're not fully satisfied with our workshops, we offer a hassle-free money-back guarantee.",
    },
  ];

  // const evenSkillset = skillset.filter((_, index) => index % 2 === 0);
  // const oddSkillset = skillset.filter((_, index) => index % 2 !== 0);

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 100,
    cssEase: "linear",
    rtl: true,
    initialSlide: 0,
  };

  const settings2 = {
    ...settings1,
    initialSlide: 3, // Start from the second slide
  };

  return (
    <div className="flex justify-center w-full h-full lg:gap-7 gap-3">
      <div className=" w-full h-auto slider-container">
        <Slider {...settings1}>
          {skillset.map((item, index) => (
            <SkillsetCard key={index} {...item} />
          ))}
        </Slider>
      </div>
      <div className=" w-full h-auto slider-container">
        <Slider {...settings2}>
          {skillset.map((item, index) => (
            <SkillsetCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skillsetcarsoul;
