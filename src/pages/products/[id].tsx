import ImageMagnifier from '@/components/Product/ImageMagnifier';
import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';
import DisplayPrice from '@/utils/DisplayPrice';
import { CartIcon, LikeIcon } from '@/assets/icon/Icon';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prismadb';
import Suggestions from '@/components/Product/Suggestions';

export const getServerSideProps: GetServerSideProps = async () => {
    const feed = await prisma.product.findMany();
    return {
        props: { feed }
    };
};


const Product = ({ feed }) => {
    const router = useRouter()
    const { products, addToCart, addToLike, fetchProducts, cart, like } = useAppStore()
    const product = products.find(el => el.id === Number(router.query.id))

    useEffect(() => {
        if (!products) {
            fetchProducts(feed)
        }
    }, [feed])

    return (
        <div className='pt-[12vh] md:pt-[20vh] md:pb-[10vh]'>
            <Container>
                <div className='h-[88vh] flex md:flex-row flex-col gap-4 md:gap-6 items-center md:items-start justify-center'>
                    <div className='h-2/5 md:w-2/5 md:h-96'>
                        <ImageMagnifier src={product.image} />
                    </div>
                    <div className='h-3/5 md:h-full md:w-3/5 flex flex-col gap-4'>
                        <h2 className='font-bold text-2xl'> {product.name}</h2>
                        <p className='line-clamp-6 md:line-clamp-none'> {product.description} </p>
                        <span className='font-semibold'> {DisplayPrice(product.price)}</span>
                        <div className="flex justify-center items-center gap-4">
                            <button onClick={() => addToCart(product)} className='flex items-center gap-1 bg-gold text-white p-2 rounded-full font-semibold hover:bg-lightgold'>
                                <span> Ajouter au panier </span>
                                <CartIcon fill={cart.find(el => el.name === product.name) ? "white" : "none"} />
                            </button>
                            <button onClick={() => addToLike(product)} className='bg-gold text-white p-2 rounded-full font-semibold hover:bg-lightgold'>
                                <LikeIcon fill={like.find(el => el.name === product.name) ? "white" : "none"} />
                            </button>
                        </div>
                    </div>
                </div>
                <Suggestions />
            </Container>
        </div>
    );
};

export default Product;