import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';
import ProductsList from '@/components/Product/ProductsList';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prismadb';
import Suggestions from '@/components/Product/Suggestions';
import { Product } from '@/types/Product';

export const getServerSideProps: GetServerSideProps = async () => {
    const feed = await prisma.product.findMany();
    return {
        props: { feed }
    };
};

const Category = ({ feed }) => {
    const router = useRouter()
    const { products, fetchProducts } = useAppStore()
    const filter: Product[] = products.filter(el => el.category.replace(/\s+/g, '') === router.query.name)

    useEffect(() => {
        if (!products) {
            fetchProducts(feed)
        }
    }, [feed])

    return (
        <div className='pt-[12vh]'>
            <Container>
                <ProductsList title={TitleCategory(router.query.name)} products={filter} />
                <Suggestions />
            </Container>
        </div>
    );
};

export default Category;

const TitleCategory = (string: string | string[]) => {
    let title: string 
    switch (string) {
        case "salon": title = "Nos Salons";
            break;
        case "salledebain": title = "Nos Salles de Bains";
            break;
        case "cuisine": title = "Nos Cuisines";
            break;
        case "chaise": title = "Nos Chaises";
            break;
        case "lampe": title = "Nos Lampes";
            break;
        case "plante": title = "Nos Plantes";
            break;
        case "table": title = "Nos Tables";
            break;
        default: title = "Nos Collections"
    }

    return title

}

