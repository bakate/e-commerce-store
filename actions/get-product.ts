import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (productId: string): Promise<Product> => {
  const res = await fetch(`${URL}/${productId}`, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};
