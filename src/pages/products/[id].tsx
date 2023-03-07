import React from 'react';
import ImageMagnifier from '@/components/ImageMagnifier';
import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';
import DisplayPrice from '@/utils/DisplayPrice';



const Product = () => {
    const router = useRouter()
    const {products} = useAppStore()
    const product = products.find(el => el.id === Number(router.query.id))
    
    
    return (
        <div className='pt-[20vh] pb-[10vh]'>
            <Container>
                <div className='flex gap-2'>
                <ImageMagnifier src={product.image}/>
                <div>
                    <h2> {product.name}</h2>
                    <p> {product.description} </p>
                    <span> {DisplayPrice(product.price)}</span>
                        
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Product;