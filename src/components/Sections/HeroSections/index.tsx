
import hero1 from "@/assets/hero1.jpg"
import hero2 from "@/assets/hero2.jpg"
import hero3 from "@/assets/hero3.jpg"
import { ArrowIcon } from "@/assets/icon/Icon";
import Link from "next/link";
import { useState } from "react";
import { HeroCard } from "./HeroCards";

type MyType = {
    imgUrl: string | any;
    id: string;
    title: string;
    slug: string;
}

const HeroSection = () => {

    const arrayCards: MyType[] = [{imgUrl: hero1, id: "1", title: "Salons", slug: "salon"}, {imgUrl: hero2, id: "2", title: "Salles de bains", slug: "salledebain"}, {imgUrl: hero3, id: "3", title: "Cuisines", slug: "cuisine"}]
    const [active, setActive] = useState('2');
  return (
    <div className="flex flex-col md:flex-row items-center h-[90vh] mx-[20px] mb-10 md:mb-0 lg:mb-14 pt-[15vh] md:pt-[10vh] lg:pt-[20vh]">
              
    <div className="md:w-2/5 flex flex-col justify-center mb-8 md:mb-0 gap-8 h-full bg-[url('../../public/bg.svg')] bg-center bg-cover bg-no-repeat">

        <h1 className="text-2xl font-bold mx-4"> Des espaces de vie pour tous les logements </h1>

        <Link href="/contact" className="flex items-center gap-2 mx-4 bg-black text-white hover:opacity-90 rounded-md px-6 py-2" > 
          <span> Prendre rendez-vous avec un conseiller </span>
          <ArrowIcon/>
        </Link>

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