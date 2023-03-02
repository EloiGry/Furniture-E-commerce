import { StateCreator } from "zustand";
import { Product } from "@/types/Product";

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