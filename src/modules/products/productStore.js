import { create } from 'zustand';

const useProductStore = create((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({
        products: [...state.products, product],
    })),
    removeProduct: (id) => set((state) => ({
        products: state.products.filter((p) => p.id !== id),
    })),
    editProduct: (updatedProduct) =>
        set((state) => ({
            products: state.products.map((p) =>
                p.id === updatedProduct.id ? { ...p, ...updatedProduct } : p
            ),
        })),
}));

export default useProductStore;
