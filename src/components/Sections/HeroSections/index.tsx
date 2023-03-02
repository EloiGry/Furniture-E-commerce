
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
              
    <div className="md:w-2/5 flex flex-col justify-around h-full bg-[url('../../public/bg.svg')] bg-center bg-cover bg-no-repeat">
        <div>
        <h1 className="text-2xl font-bold m-2 md:p-8"> Des espaces de vie pour tous les logements </h1>

        <h3 className="text-xl mb-2 ml-2 md:pl-8 md:pb-8" > N'hésitez pas à contacter nos conseillers </h3>
        </div>

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