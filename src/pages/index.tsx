import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";
import HeroSection from '@/components/Sections/Home/HeroSection';
import { useAppStore } from '@/lib/store';
import { useEffect } from 'react';
import Newslatter from '@/components/Sections/Home/Newslatter';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Salons from '@/components/Sections/Category/Salons';
import Cuisine from '@/components/Sections/Category/Cuisine';
import SalleDeBain from '@/components/Sections/Category/SalleDeBain';


export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed }
  };
};


const IndexPage = ({ feed }) => {

  const { fetchProducts } = useAppStore()

  useEffect(() => {
    fetchProducts(feed)
  }, [feed])



  return (
    <>
      <HeroSection />
      <Stats marginTop='none'/>
      <Newslatter />
      <Testimonials />
      <Salons />
      <Cuisine />
      <SalleDeBain />
    </>
  )
};

export default IndexPage;