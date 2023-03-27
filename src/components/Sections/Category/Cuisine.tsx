import { useAppStore } from "@/lib/store";
import ProductsList from "../../Product/ProductsList";

const Cuisine = () => {
    const { products } = useAppStore()
    const filter = products.filter(product => product.category === "cuisine")
    return (
        <ProductsList products={filter} title="Nos Cuisines" />
    );
};

export default Cuisine;