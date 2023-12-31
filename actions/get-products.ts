import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      sizeId: query?.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
};
