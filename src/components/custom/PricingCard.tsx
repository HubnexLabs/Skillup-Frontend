import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface IProp {
  name: string;
  about: string;
  plan: string;
  link: string;
  feature: string[];
  tag?: string;
}

export default function PricingCard({
  about,
  feature,
  link,
  name,
  plan,
  tag,
}: IProp) {
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    const deadline = new Date(1732270215548);
    deadline.setDate(deadline.getDate() + 4); // Set the deadline 4 days from now

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = deadline.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown("Expired");
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`w-[374px] transition-all lg:hover:scale-[1.1] "h-[684px] bg-white hover:bg-green-primary text-black" : "h-[644px]"
      rounded-[15.224px] overflow-hidden shadow-xl relative flex flex-col p-3 items-center justify-around group`}
    >
      <div className="mx-auto p-2 bg-red-primary rounded-lg z-50 flex items-center">
        <img src="/icons/shock.svg" alt="" />
        <span className={`text-sm font-semibold text-white`}>Flash Sale</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="group-hover:text-white text-2xl lg:text-3xl font-semibold">
          {name}
        </h1>
        <p className="group-hover:text-white my-1 text-sm md:text-base text-center leading-6 px-2 z-50">
          {about}
        </p>
      </div>
      <h2 className="group-hover:text-white text-center text-2xl lg:text-3xl my-1 font-semibold z-40">
        {`${plan.split("-")[0]} `}
        <s
          className={`lowercase text-base text-black-100 group-hover:text-white  font-normal
          `}
        >
          {plan.split("-")[1]}
        </s>
      </h2>
      <span className="group-hover:text-white text-black z-10 underline">
        {tag}
      </span>

      <span className="hidden group-hover:block w-[500px] absolute h-[500px] scale-150 rounded-[100%] bg-green-quaternary/50 top-[35%]"></span>
      <div className="w-full relative min-h-[374px] flex flex-col justify-around items-center z-40 hover:bg-white hover:text-black bg-green-light  rounded-lg p-3">
        <div className="w-full px-4">
          {feature.map((feature, i) => (
            <div className="flex items-center justify-start gap-3 my-5" key={i}>
              <img src="/icons/success.svg" alt="successImage" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-2 bg-yellow-100 p-3 rounded-lg w-full">
          <p className="text-lg font-semibold bg-red-primary text-white py-2 flex items-center justify-center">
            <Clock className="w-5 h-5 mr-2 " />
            {countdown === "Expired"
              ? "Offer Expired"
              : `Ends in: ${countdown}`}
          </p>
        </div>

        <Link
          to={link}
          className={`w-[90%] cursor-pointer bottom-5 mx-auto group-hover:bg-green-secondary bg-white
           shadow-lg rounded-md`}
        >
          <button
            className={`w-full p-3 rounded-lg   text-green-primary  group-hover:text-white
             font-semibold`}
          >
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
}
