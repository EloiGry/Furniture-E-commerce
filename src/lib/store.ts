import { create } from 'zustand'
import { CartSlice, createCartSlice } from '@/slices/createCartSlice'
import { createProductSlice, ProductSlice } from '@/slices/createProductSlice'
import { LikeSlice, createLikeSlice } from '@/slices/createLikeSlice'
import { persist } from 'zustand/middleware'


export type StoreState = ProductSlice & CartSlice & LikeSlice

export const useAppStore = create<StoreState>()(persist((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
    ...createLikeSlice(...a),
}), ({name: "storage"})))