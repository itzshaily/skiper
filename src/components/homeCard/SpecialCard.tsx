import React from "react";
import { SkiperCard } from "../ui/skiper-card";
import BadgeButton from "../ui/badge-button";
import card1 from "/public/images/card1.webp";
import card2 from "/public/images/card2.webp";
import card3 from "/public/images/card3.webp";
import card4 from "/public/images/card4.webp";
import card5 from "/public/images/card5.webp";
import card6 from "/public/images/card6.png";
import { cn } from "@/lib/utils";


const SpecialCard = () => {
  return (
    <div className="m-20">
      <div className="w-[61.5%]  mx-auto">
        <BadgeButton>
            Component Preview
        </BadgeButton>

        <h2 className="text-black/80 text-center font-bold text-6xl mt-8">Tailwind + Framer + React</h2>
        <h5 className="text-black/80 text-center font-bold text-3xl mb-8">Everything you need to ship</h5>
        <SkiperCard
            title="Components that pop"
           description="Make your app 🤌"
            bgClass="lg:bg-gradient-to-tr"
          step1img1Class={cn(
            "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
            "md:group-hover:translate-y-2"
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
            "md:group-hover:-translate-y-6 "
          )}
          step2img1Class={cn(
            "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
            "md:group-hover:translate-y-2"
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
            "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "md:group-hover:-translate-y-6"
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          step4imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          image={{
            step1light1: card1,
            step1light2: card2,
            step2light1: card3,
            step2light2: card4,
            step3light: card5,
            step4light: card6,
            alt: "Something",
          }}
        />
      </div>
    </div>
  );
};

export default SpecialCard;
