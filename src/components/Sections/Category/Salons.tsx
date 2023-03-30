import { useAppStore } from "@/lib/store";
import ProductsList from "../../Product/ProductsList";
import { Product } from "@/types/Product";

const Salons = () => {
    const { products } = useAppStore()
    const filter: Product[] = products.filter(product => product.category === "salon")


    return (
        <ProductsList products={filter} title="Nos Salons" />
    );
};

export default Salons;