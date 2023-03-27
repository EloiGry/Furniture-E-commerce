import { useAppStore } from "@/lib/store";
import ProductsList from "../Product/ProductsList";

const Salons = () => {
    const { products } = useAppStore()
    const filter = products.filter(product => product.category === "salon")


    return (
        <ProductsList products={filter} title="Nos Salons" />
    );
};

export default Salons;