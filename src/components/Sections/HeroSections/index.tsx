
import hero1 from "@/assets/hero1.jpg"
import hero2 from "@/assets/hero2.jpg"
import hero3 from "@/assets/hero3.jpg"
import { useState } from "react";
import { HeroCard } from "./HeroCards";

type MyType = {
    imgUrl: string | any;
    id: string;
    title: string
}

const HeroSection = () => {

    const arrayCards: MyType[] = [{imgUrl: hero1, id: "1", title: "Salons"}, {imgUrl: hero2, id: "2", title: "Salles de bains"}, {imgUrl: hero3, id: "3", title: "Cuisines"}]
    const [active, setActive] = useState('2');
  return (
    <div className="flex flex-col md:flex-row items-center h-[90vh] mx-[20px] mb-10 md:mb-14">
              
    <div className="md:w-2/5 flex flex-col justify-center gap-8 h-full bg-[url('../../public/bg.svg')] bg-center bg-cover bg-no-repeat">

        <h1 className="text-2xl font-bold mx-4"> Des espaces de vie pour tous les logements </h1>

        <button className="flex items-center gap-2 mx-4 bg-black text-white hover:opacity-90 rounded-md px-6 py-2" > 
          <span> Prendre rendez-vous avec un conseiller </span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
          </svg>
        </button>

    </div>
    <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 md:w-3/5 md:float-right w-full">
        {arrayCards.map((card, index) => (
            <HeroCard
              key={card.id}
              {...card}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
    </div>
    </div>
  );
};

export default HeroSection;