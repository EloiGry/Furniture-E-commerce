import React from 'react';
import ImageMagnifier from '@/components/ImageMagnifier';
import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';
import DisplayPrice from '@/utils/DisplayPrice';




const Product = () => {
    const router = useRouter()
    const {products, addToCart, addToLike} = useAppStore()
    const product = products.find(el => el.id === Number(router.query.id))

    
    
    return (
        <div className='pt-[20vh] pb-[10vh]'>
            <Container>
                <div className='flex gap-6 items-center'>
                <div className='w-2/5 h-96'>
                    <ImageMagnifier src={product.image}/>
                </div>
                <div className='w-3/5 flex flex-col gap-4'>
                    <h2 className='font-bold text-2xl'> {product.name}</h2>
                    <p> {product.description} </p>
                    <span className='font-semibold'> {DisplayPrice(product.price)}</span>
                    <div className="flex justify-center items-center gap-4">
                        <button onClick={() => addToCart(product)} className='flex items-center gap-1 bg-gold text-white p-2 rounded-full font-semibold hover:bg-lightgold'>
                            <span> Ajouter au panier </span>
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
                        <button onClick={() => addToLike(product)} className='bg-gold text-white p-2 rounded-full font-semibold hover:bg-lightgold'>
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
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Product;