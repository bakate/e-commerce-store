"use client";

import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };

  const handleClick = () => {
    router.push(`/product/${product?.id}`);
  };

  const PreviewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    PreviewModal.onOpen(product);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white  dark:text-gray-800 group cursor-pointer rounded-xl border p-3 space-y-4 transition-all hover:scale-105"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={product.images?.[0]?.url}
          alt=""
          fill
          sizes="300px"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div
            className={cn(
              "flex gap-x-6 justify-center text-gray-600 dark:text-gray-100"
            )}
          >
            <Button variant="outline" size="icon" onClick={onPreview}>
              <Expand size={20} />
            </Button>
            <Button variant="outline" size="icon" onClick={onAddToCart}>
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg dark:text-gray-800">
          {product.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-800">
          {product.category?.name}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={+product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
