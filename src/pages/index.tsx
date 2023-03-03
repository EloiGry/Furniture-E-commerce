import prisma from '@/lib/prismadb';
import type { GetServerSideProps } from "next";
import Header from '@/layout/Header';
import HeroSection from '@/components/Sections/HeroSections';
import { useAppStore } from '@/lib/store';
import { useEffect, useState } from 'react';
import MasonryGrid from '@/components/MasonryGrid';
import DisplayPrice from '@/utils/DisplayPrice';
import Loading from '@/components/Loading';
import Newslatter from '@/components/Newslatter';
import Testimonials from '@/components/Testimonials';

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.product.findMany();
  return {
    props: { feed }
  };
};


const IndexPage = ({feed}) => { 
  const [loaded, setLoaded] = useState(false)

  const { products, fetchProducts, cart, addToCart, addToLike } = useAppStore()
  console.log("cart" ,cart);

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
        <Header/>
        <HeroSection/>
        <Newslatter/>
        <Testimonials/>
        <MasonryGrid >
        {products?.map(product => {
          return (
              <div key={product.id} className="overflow-hidden">
                <div className="relative cursor-pointer hover:transform hover:scale-105 duration-300 transition-all">
                  <img src={product.image} />
                  <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 absolute duration-300 transition-all top-0 left-0 right-0 bottom-0 bg-[#DEB887] bg-opacity-50 text-center text-white'>
                    <span className='font-bold'>{product.name}</span> 
                    <span className='font-semibold m-1'> {DisplayPrice(product.price)} </span> 
                    <button onClick={() => addToCart(product)} className='bg-gold py-2 px-8 m-4 rounded-sm font-semibold hover:bg-lightgold'>Cart</button>
                    <button onClick={() => addToLike(product)} className='bg-gold py-2 px-8 rounded-sm font-semibold hover:bg-lightgold'>Like</button>  
                  </div> 
                 </div>
              </div>
           
          )
        })}
         </MasonryGrid>
      </>
    )
  };

export default IndexPage;