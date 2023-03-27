import { useAppStore } from '@/lib/store';
import { useState } from 'react';
import { Product } from '@/types/Product';
import DisplayPrice from '@/utils/DisplayPrice';
import { CartIcon, LikeIcon } from '@/assets/icon/Icon';



const Search = () => {
    const {products, addToCart, addToLike} = useAppStore()
    const [productsFiltered, setProductsFilterds] = useState("")
    const filter : Product[] = productsFiltered.length >= 3 && products.filter(product => product.name.toLowerCase().includes(productsFiltered.toLowerCase()))
    const display : boolean = filter && filter.length > 0
    const noResult : boolean = filter && filter.length < 1
    const inputEmpty : boolean = productsFiltered.length < 3
    return (
        <div className="flex flex-col justify-start gap-4 pt-[10vh]">
            <div>
            <h4> Que cherchez-vous ? </h4>
            <input placeholder='Que cherchez-vous ?' onChange={event => setProductsFilterds(event.target.value)} value={productsFiltered} className='py-1 px-4 w-full border-2 border-grey rounded-md'/>
            </div>
            {display && filter.map((product: Product) => {
                return (
                    <div key={product.name} className="grid-cart">
                        <img src={product.image} className="w-8 h-8"/>
                        <p className="truncate"> {product.name} </p>
                        <button onClick={() => addToCart(product)} className="flex items-center justify-start gap-1">
                            <p> Ajouter </p>
                                <CartIcon fill="none"/>
                        </button>
                        <span> {DisplayPrice(product.price)}</span>
                        <button onClick={() =>addToLike(product)}>
                            <LikeIcon fill="none"/>
                        </button>
                    </div>
                )
            })}
            {
                noResult && `Aucuns résultats trouvés pour la recherche "${productsFiltered}"`
            }
            {inputEmpty && "Veuillez entrer au moins 3 caractères pour effectuer une recherche"}
        </div>
    );
};

export default Search;