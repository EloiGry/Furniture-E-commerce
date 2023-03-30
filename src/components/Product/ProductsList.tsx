import { Product } from "@/types/Product";
import MasonryGrid from "../MasonryGrid";
import DisplayPrice from "@/utils/DisplayPrice";
import Container from "../Container";
import { useAppStore } from "@/lib/store";
import Router from "next/router";
import { CartIcon, LikeIcon } from "@/assets/icon/Icon";

interface List {
    products: Product[],
    title: string
}

const ProductsList = ({ products, title }: List) => {

    const { addToCart, addToLike, cart, like } = useAppStore()
    return (
        <Container>
            <h2 className="font-TitleFont text-4xl my-4"> {title} </h2>
            <MasonryGrid >
                {products?.map((product: Product) => {
                    return (
                        <div key={product.id} className="overflow-hidden">
                            <div className="relative cursor-pointer hover:transform hover:scale-105 duration-300 transition-all">
                                <img src={product.image} />
                                <div className='flex flex-col justify-center items-center opacity-0 hover:opacity-100 absolute duration-300 transition-all top-0 left-0 right-0 bottom-0 bg-[#DEB887] bg-opacity-50 text-center text-white'>
                                    <span className='font-bold'>{product.name}</span>
                                    <span className='font-semibold m-1'> {DisplayPrice(product.price)} </span>
                                    <div className="flex justify-center items-center gap-2">
                                        <button onClick={() => addToCart(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                                            <CartIcon fill={cart?.find(el => el.name === product.name) ? "white" : "none"} />
                                        </button>
                                        <button onClick={() => addToLike(product)} className='bg-gold p-2 rounded-full font-semibold hover:bg-lightgold'>
                                            <LikeIcon fill={like?.find(el => el.name === product.name) ? "white" : "none"} />
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