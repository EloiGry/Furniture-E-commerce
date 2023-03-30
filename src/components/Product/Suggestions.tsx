import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useAppStore } from '@/lib/store';
import DisplayPrice from "@/utils/DisplayPrice";
import { useRouter } from 'next/router'
import { Product } from "@/types/Product";
import "swiper/css";
import "swiper/css/pagination";
import { CartIcon, LikeIcon } from "@/assets/icon/Icon";
import { useEffect, useState } from "react";

const Suggestions = () => {
    const [selection, setSelection] = useState<Product[]>([])
    const router = useRouter()
    const {products, addToCart, addToLike, cart, like } = useAppStore()
    
    useEffect(() => {
      const filter: Product[] = products.filter(el => el.category.replace(/\s+/g, '') !== router.query.name)
      const newArray: Product[] = [...filter].sort(() => Math.random() - 0.5).splice(0, 9)
      setSelection(newArray)
    }, [])
    
    return (
        <div className="my-8">
        <h3 className="font-TitleFont text-4xl my-4"> Nos suggestions personnalisées </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: '.my-custom-pagination-div',
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {selection?.map((product: Product) => {
          return (
            <SwiperSlide key={product.id}>
              <div>
                <div className="relative cursor-pointer hover:transform hover:scale-105 duration-300 transition-all">
                  <img src={product.image} height={320}/>
                  <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 absolute duration-300 transition-all top-0 left-0 right-0 bottom-0 bg-[#DEB887] bg-opacity-50 text-center text-white'>
                    <span className='font-bold'>{product.name}</span> 
                    <span className='font-semibold m-1'> {DisplayPrice(product.price)} </span> 
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => addToCart(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <CartIcon fill={cart.find(el => el.name === product.name) ? "white" : "none"}/>
                        </button>
                        <button onClick={() => addToLike(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <LikeIcon fill={like.find(el => el.name === product.name) ? "white" : "none"}/>
                        </button> 
                    </div> 
                    <button onClick={() => router.push(`/products/${product.id}`)} className="bg-gold py-1 px-10 m-4 rounded-sm font-semibold hover:bg-lightgold"> Voir </button>
                  </div> 
                 </div>
              </div>
              </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="my-custom-pagination-div" />
    </div>
    );
};

export default Suggestions;