import { useAppStore } from "@/lib/store";
import ProductsList from "../../Product/ProductsList";

const SalleDeBain = () => {
    const { products } = useAppStore()
    const filter = products.filter(product => product.category === "salle de bain")
    return (
        <ProductsList products={filter} title="Nos Salles de bains" />
    );
};

export default SalleDeBain;