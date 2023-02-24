import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";
import Header from '@/layout/Header';
import HeroSection from '@/components/Sections/HeroSections';


export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed }
  };
};


const IndexPage = ({feed}) => { 
  console.log("feed" ,feed);
    return (
      <>
        <Header/>
        <HeroSection/>
      </>
    )
  };

export default IndexPage;