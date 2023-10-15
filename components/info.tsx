"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { useState } from "react";
import { Badge } from "./ui/badge";

interface InfoProps {
  data: Product;
  onItemAdded?: () => void;
}

const Info: React.FC<InfoProps> = ({ data, onItemAdded }) => {
  const cart = useCart();
  const [selectedSize, setSelectedSize] = useState(data.sizes);

  const onAddToCart = () => {
    cart.addItem({ ...data, sizes: selectedSize });
    onItemAdded?.();
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        {data.name}
      </h1>
      <p className="text-sm text-gray-700 dark:text-gray-100">
        {data.description}
      </p>
      <div className="mt-3 flex items-center">
        <h3 className="font-semibold text-black dark:text-gray-100 mr-2">
          Price:
        </h3>
        <p className="text-2xl text-gray-900">
          <Currency value={+data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-black dark:text-gray-100">Size:</h3>
          {data.sizes.map((size) => (
            <Badge
              key={size.value}
              className={cn(
                "cursor-pointer mr-1 bg-gray-900 text-white",
                size.id === selectedSize[0].id && "bg-gray-200 text-black"
              )}
              onClick={() => {
                setSelectedSize([size]);
              }}
            >
              {size.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2"
          disabled={selectedSize.length !== 1}
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
