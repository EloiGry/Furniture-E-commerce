import { motion } from 'framer-motion';
import { FadeIn } from "@/utils/FadeIn"
import Image from 'next/image';

type AppProps = {
    id: string,
    imgUrl: string,
    index: number,
    active: string,
    handleClick: (id: string) => void,
    title: string
}

export const HeroCard = ({ id, imgUrl, index, active, handleClick, title }: AppProps) => (
    <motion.div
      variants={FadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt="mainImages"
        className="absolute h-full object-cover rounded-[24px] w-full"
      />
      {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <motion.div initial="hidden"
      animate="visible"
      variants={characterAnimation} className="absolute bottom-0 p-8 flex justify-start w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <motion.div
          className="glassmorphism" initial="hidden"
          animate="visible"
          variants={characterAnimation}
        >
        <h2 
 className=" flex font-semibold sm:text-[32px] text-[24px] text-white">
          Voir {title}
        </h2>
      </motion.div>
      </motion.div>)}
    
      </motion.div>
);


const characterAnimation = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
        type: "tween"
      },
    },
  };