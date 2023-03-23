import { Product } from "@/types/Product";
import DisplayPrice from "@/utils/DisplayPrice";
import { useAppStore } from "@/lib/store";
import { TrashIcon } from "@/assets/icon/Icon";

const Cart = ({products}) => {
    const {updateQuantity, removeFromCart} = useAppStore()
    const sum = products.reduce((total: number, obj: Product) => obj.price * obj.quantity + total, 0);
    

    return (
        <div className="flex flex-col justify-start gap-4 pt-[10vh]">
            <h4> Mon Panier </h4>
            {products.length < 1 && <p className="text-gray-500"> Vous n'avez aucuns produits dans votre panier </p>}
            {products.map((product: Product) => {
                return (
                    <div key={product.id} className="grid-cart">
                        <img src={product.image} className="w-8 h-8"/>
                        <p className="truncate"> {product.name} </p>
                        <div className="flex items-center justify-start gap-2">
                            <button onClick={() => updateQuantity(product?.id, 'decrease')} className="text-white bg-black rounded-full w-4 h-4 flex justify-center items-center"> - </button>
                            <span> {product.quantity} </span>
                            <button onClick={() => updateQuantity(product?.id, 'increase')} className="text-white bg-black rounded-full w-4 h-4 flex justify-center items-center"> + </button>
                        </div>
                        <span> {DisplayPrice(product.price * product.quantity)}</span>
                        <button onClick={() =>removeFromCart(product?.id)}>
                            <TrashIcon/>
                        </button>
                    </div>
                )
            })}
            <p> Total : {DisplayPrice(sum)}</p>
        </div>
    );
};

export default Cart;