import { StateCreator } from "zustand";

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity?: number;
}

export interface ProductSlice {
    products: Product[];
    fetchProducts: (feed:Product[]) => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    products: [],
    fetchProducts: async (feed:Product[]) => {
        set({ products: feed })  
    },
})