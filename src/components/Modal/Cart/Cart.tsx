import { Product } from "@/types/Product";
import DisplayPrice from "@/utils/DisplayPrice";
import { useAppStore } from "@/lib/store";

const Cart = ({products}) => {
    const {updateQuantity, removeFromCart} = useAppStore()
    return (
        <div className="flex flex-col justify-start gap-4 pt-[5vh]">
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </button>
                    </div>
                )
            })}
        </div>
    );
};

export default Cart;