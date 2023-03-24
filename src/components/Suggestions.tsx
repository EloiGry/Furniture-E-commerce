import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useAppStore } from '@/lib/store';
import DisplayPrice from "@/utils/DisplayPrice";
import { useRouter } from 'next/router'
import "swiper/css";
import "swiper/css/pagination";
import { CartIcon, LikeIcon } from "@/assets/icon/Icon";

const Suggestions = () => {
    const router = useRouter()
    const {products, addToCart, addToLike } = useAppStore()
    const filter = products.filter(el => el.category.replace(/\s+/g, '') !== router.query.name)
    const selection = filter.sort(() => Math.random() - 0.5).splice(0, 9)
    return (
        <div className="my-8">
        <h3 className="font-TitleFont text-4xl my-4"> Nos suggestions personnalisées </h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {selection?.map(product => {
          return (
            <div key={product.id}>
            <SwiperSlide  >
              <div>
                <div className="relative cursor-pointer hover:transform hover:scale-105 duration-300 transition-all">
                  <img src={product.image} height={350}/>
                  <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 absolute duration-300 transition-all top-0 left-0 right-0 bottom-0 bg-[#DEB887] bg-opacity-50 text-center text-white'>
                    <span className='font-bold'>{product.name}</span> 
                    <span className='font-semibold m-1'> {DisplayPrice(product.price)} </span> 
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => addToCart(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <CartIcon/>
                        </button>
                        <button onClick={() => addToLike(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <LikeIcon/>
                        </button> 
                    </div> 
                    <button onClick={() => router.push(`/products/${product.id}`)} className="bg-gold py-1 px-10 m-4 rounded-sm font-semibold hover:bg-lightgold"> Voir </button>
                  </div> 
                 </div>
              </div>
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </div>
    );
};

export default Suggestions;