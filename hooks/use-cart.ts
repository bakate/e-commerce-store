import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          set({
            items: [
              ...new Set(
                currentItems.map((item) =>
                  item.id === existingItem.id
                    ? {
                        ...item,
                        quantity: item.quantity ? item.quantity + 1 : 1,
                      }
                    : { ...item, quantity: item.quantity ? item.quantity : 1 }
                )
              ),
            ],
          });
          toast.success("Increased quantity of item in cart.");
        } else {
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success("Item added to cart.");
        }
      },
      decreaseItem: (id: string) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find((item) => item.id === id);

        if (itemToRemove?.quantity && itemToRemove?.quantity > 1) {
          set({
            items: currentItems.map((item) =>
              item.id === itemToRemove.id
                ? { ...item, quantity: item.quantity ? item.quantity - 1 : 1 }
                : item
            ),
          });
          toast.success("Decreased quantity of item in cart.");
        } else {
          set({ items: [...currentItems.filter((item) => item.id !== id)] });
          toast.success("Item removed from cart.");
        }
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        set({ items: [...currentItems.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
