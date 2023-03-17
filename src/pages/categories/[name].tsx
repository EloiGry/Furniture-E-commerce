import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';
import ProductsList from '@/components/ProductsList';
import dynamic from "next/dynamic"

const Suggestions = dynamic(
  () => import('@/components/Suggestions'),
  { ssr: false }
)


const Category = () => {
    const router = useRouter()
    const {products} = useAppStore()
    const filter = products.filter(el => el.category.replace(/\s+/g, '') === router.query.name)
    
    return (
        <div className='pt-[12vh]'>
            <Container>
                <ProductsList title={TitleCategory(router.query.name)} products={filter}/>
                <Suggestions/>
            </Container>
        </div>
    );
};

export default Category;

const TitleCategory = (string: string | string[]) => {
    let title : string = null
    switch(string) {
        case "salon" :  title="Nos Salons";
        break;
        case "salledebain" : title="Nos Salles de Bains";
        break;
        case "cuisine" : title="Nos Cuisines"
        break;
        default: title="Nos Collections" 
    }  

    return title
    
}

