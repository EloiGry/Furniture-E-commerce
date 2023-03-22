import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";
import HeroSection from '@/components/Sections/HeroSections';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Newslatter from '@/components/Newslatter';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import Salons from '@/components/Salons';
import Cuisine from '@/components/Cuisine';
import SalleDeBain from '@/components/SalleDeBain';


export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed }
  };
};


const IndexPage = ({feed}) => { 
  const [loaded, setLoaded] = useState(false)

  const { products, fetchProducts, cart} = useAppStore()

  useEffect(() => {
    setLoaded(true);
}, [products]);

  useEffect(() => {
      fetchProducts(feed)
  }, [feed])

  if (!products || !loaded) {
    return (
      <Loading/>
    )
  }
    return (
      <>
        <HeroSection/>
        <Stats/>
        <Newslatter/>
        <Testimonials/>
         <Salons/>
         <Cuisine/>
         <SalleDeBain/>
      </>
    )
  };

export default IndexPage;