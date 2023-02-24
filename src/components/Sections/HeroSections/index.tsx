
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
    <div className="flex flex-col md:flex-row items-center h-[90vh] mx-[20px]">
              
    <div className="md:w-2/5 flex flex-col justify-around h-full bg-[url('../../public/bg.svg')] bg-center bg-cover bg-no-repeat">
        <div>
        <h1 className="text-2xl text-bold"> Des collections nananan </h1>

        <h3 className="text-xl text-semibold" > Des collections nananan </h3>
        </div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde odio fugit ad animi, corporis velit facere dolorem voluptatem quisquam, accusantium magnam at vitae qui! Aut repellat aperiam blanditiis animi!</p>

    </div>
    <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 md:w-3/5 md:float-right w-full ">
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