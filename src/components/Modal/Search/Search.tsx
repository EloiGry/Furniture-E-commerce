import React from 'react';
import { useAppStore } from '@/lib/store';
import { useState } from 'react';
import { Product } from '@/types/Product';
import DisplayPrice from '@/utils/DisplayPrice';



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
                    <div key={product.id} className="grid-cart">
                        <img src={product.image} className="w-8 h-8"/>
                        <p className="truncate"> {product.name} </p>
                        <button onClick={() => addToCart(product)} className="flex items-center justify-start gap-1">
                            <p> Ajouter </p>
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg> 
                        </button>
                        <span> {DisplayPrice(product.price)}</span>
                        <button onClick={() =>addToLike(product)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
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