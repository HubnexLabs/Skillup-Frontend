import ReviewCard from "./Testmonialcard";
import person from "../../assets/Ellipse 1.svg";
import person2 from "../../assets/Ellipse 1 (1).svg";
import person3 from "../../assets/Ellipse 1 (2).svg";
import person4 from "../../assets/blackwomen.svg";
import Marquee from "../magicui/marquee";
import { useMediaQuery } from "react-responsive";
// import { useState, useEffect } from "react";
function ReviewCardCarosul() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const ppl = [
    {
      profile: person,
      name: "Wade Warren",
      role: "UI/UX Designer @Microsoft",
      comment: "Awesome website and funnel for your business",
    },
    {
      profile: person4,
      name: "Nicole Champlin",
      role: "UI/UX Designer @Microsoft",
      comment: "Couldn’t agree more to this product! ",
    },
    {
      profile: person2,
      name: "Elias Watsica",
      role: "UI/UX Designer @Microsoft",
      comment: "Super recommended product. You have to try!",
    },
    {
      profile: person3,
      name: "Theresa Conroy",
      role: "UI/UX Designer @Microsoft",
      comment: "I cannot believe my eyes, this is real!",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center lg:h-[350px] h-[700px] overflow-hidden">
        <div className="h-full lg:w-[1208px] w-full">
          <Marquee
            pauseOnHover
            reverse={true}
            vertical={isSmallScreen}
            className="[--duration:30s]"
          >
            {ppl.map((p, i) => (
              <ReviewCard
                key={i}
                profile={p.profile}
                name={p.name}
                role={p.role}
                comment={p.comment}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default ReviewCardCarosul;
