import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="flex-1 relative ml-4 flex sm:ml-6 items-center flex-wrap">
        <div className="absolute z-10 right-0 top-0">
          <Button
            onClick={() => cart.addItem(data)}
            variant={"ghost"}
            size={"icon"}
          >
            <Plus size={10} />
          </Button>
          <Button onClick={() => cart.decreaseItem(data.id)} variant={"ghost"}>
            <Minus size={10} />
          </Button>
          <Button onClick={() => cart.removeItem(data.id)} variant={"ghost"}>
            <X size={10} />
          </Button>
        </div>
        <div className="grid-cols-1 grid-rows-3 gap-y-4">
          <p className="text-lg font-semibold text-black dark:text-white">
            {data.name}
          </p>
          <p className=" text-lg font-semibold text-black dark:text-white">
            Quantity: {data.quantity}
          </p>
          Price: <Currency value={+data.price} />
          {data.sizes.map((size) => (
            <p key={size.id} className=" border-gray-200 text-gray-500">
              Size: {size.name}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
