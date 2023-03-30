import { useAppStore } from "@/lib/store";
import ProductsList from "../../Product/ProductsList";
import { Product } from "@/types/Product";

const Cuisine = () => {
    const { products } = useAppStore()
    const filter: Product[] = products.filter(product => product.category === "cuisine")
    return (
        <ProductsList products={filter} title="Nos Cuisines" />
    );
};

export default Cuisine;