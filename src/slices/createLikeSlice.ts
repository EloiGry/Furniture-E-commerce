import { StateCreator } from "zustand";
import { Product } from "@/types/Product";



export interface LikeSlice {
    like: Product[];
    addToLike: (product: Product) => void;
    removeFromLike: (productId: number) => void;
    showLike: boolean;
    toggleLike: () => void;
}

export const createLikeSlice: StateCreator<LikeSlice> = (set, get) => ({
    like: [],
    addToLike: (product: Product) => {
        const like = get().like;
        const findProduct = like.find(p => p.id === product.id);
        if (!findProduct) {
            like.push({ ...product});
        }
        set({ like });
    },
    removeFromLike: (productId: number) => {
        set({ like: get().like.filter(product => product.id !== productId) })
    },
    showLike: false,
    toggleLike: () => {
        set({ showLike: !get().showLike })
    }
})