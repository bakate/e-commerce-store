export type Product = {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  sizes: Size[];
  inventory: number;
  description: string;
  images: Image[];
  quantity: number;
};

export type Image = {
  id: string;
  url: string;
};

export type Billboard = {
  id: string;
  label: string;
  imageUrl: string;
  store: {
    name: string;
  };
};

export type Category = {
  id: string;
  name: string;
  billboard: Billboard;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};
