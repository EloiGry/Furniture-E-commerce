import { useRouter } from 'next/router'
import { useAppStore } from '@/lib/store';
import Container from '@/components/Container';

const Category = () => {
    const router = useRouter()
    const {products } = useAppStore()
    const filter = products.filter(el => el.category.replace(/\s+/g, '') === router.query.name)
    console.log(filter);
    
    return (
        <div className='pt-[12vh]'>
            {router.query.name}
        </div>
    );
};

export default Category;