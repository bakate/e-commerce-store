"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "react-hot-toast";

import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
// import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
    toast.success("Product added to cart");
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {data.name}
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-100">
        {data.description}
      </p>
      <div className="mt-3 flex items-end justify-between ">
        <p className="text-2xl text-gray-900">
          <Currency value={+data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-gray-100">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-gray-100">
            Color:
          </h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
