import { Product } from "@/types/Product";
import DisplayPrice from "@/utils/DisplayPrice";
import { useAppStore } from "@/lib/store";
import { CartIcon, TrashIcon } from "@/assets/icon/Icon";

const Like = ({products}) => {
    const {removeFromLike, addToCart} = useAppStore()
    return (
        <div className="flex flex-col justify-start gap-4 pt-[10vh]">
            <h4> Mes coups de coeurs </h4>
            {products.length < 1 && <p className="text-gray-500"> Vous n'avez pas encore de produits coup de coeurs </p>}
            {products.map((product: Product) => {
                return (
                    <div key={product.name} className="grid-cart">
                        <img src={product.image} className="w-8 h-8"/>
                        <p className="truncate"> {product.name} </p>
                        <button onClick={() => addToCart(product)} className="flex items-center justify-start gap-1">
                            <p> Ajouter </p>
                                <CartIcon fill="none"/>
                        </button>
                        <span> {DisplayPrice(product.price)}</span>
                        <button onClick={() =>removeFromLike(product?.id)}>
                            <TrashIcon/>
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default Like;