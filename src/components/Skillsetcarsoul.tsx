import SkillsetCard from "./SkillsetCard";
import Marquee from "./magicui/marquee";

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

  const evenSkillset = skillset.filter((_, index) => index % 2 === 0);
  const oddSkillset = skillset.filter((_, index) => index % 2 !== 0);

  return (
    <div className="flex justify-center h-full w-full gap-5">
      <div className="flex h-full w-auto">
        <Marquee
          pauseOnHover
          vertical={true}
          className="[--duration:30s] flex flex-col"
        >
          {evenSkillset.map((skill, index) => (
            <SkillsetCard
              key={index}
              one={skill.one}
              two={skill.two}
              three={skill.three}
            />
          ))}
        </Marquee>
        <Marquee
          pauseOnHover
          vertical={true}
          className="[--duration:30s] flex flex-col"
        >
          {oddSkillset.map((skill, index) => (
            <SkillsetCard
              key={index}
              one={skill.one}
              two={skill.two}
              three={skill.three}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skillsetcarsoul;
