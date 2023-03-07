import { Product } from "@/types/Product";
import MasonryGrid from "./MasonryGrid";
import DisplayPrice from "@/utils/DisplayPrice";
import Container from "./Container";
import { useAppStore } from "@/lib/store";
import Router from "next/router";

interface List {
    products: Product[],
    title: string
}

const ProductsList = ({products, title}: List) => {
    
    const {addToCart, addToLike} = useAppStore()
    return (
        <Container>
            <h2 className="font-TitleFont text-4xl my-4"> {title} </h2>
        <MasonryGrid >
        {products?.map(product => {
          return (
              <div key={product.id} className="overflow-hidden">
                <div className="relative cursor-pointer hover:transform hover:scale-105 duration-300 transition-all">
                  <img src={product.image} />
                  <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 absolute duration-300 transition-all top-0 left-0 right-0 bottom-0 bg-[#DEB887] bg-opacity-50 text-center text-white'>
                    <span className='font-bold'>{product.name}</span> 
                    <span className='font-semibold m-1'> {DisplayPrice(product.price)} </span> 
                    <div className="flex justify-center items-center gap-2">
                        <button onClick={() => addToCart(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </button>
                        <button onClick={() => addToLike(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-4 h-4"
                            >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
                                />
                            </svg>
                        </button> 
                    </div> 
                    <button onClick={() => Router.push(`/products/${product.id}`)} className="bg-gold py-1 px-10 m-4 rounded-sm font-semibold hover:bg-lightgold"> Voir </button>
                  </div> 
                 </div>
              </div>
           
          )
        })}
         </MasonryGrid>
         </Container>
    );
};

export default ProductsList;