"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBasket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const NavBarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <ModeToggle />
      <Button
        variant={"ghost"}
        onClick={() => router.push("/cart")}
        className="flex items-center px-5 py-2 relative"
      >
        <ShoppingBasket size={"icon"} />
        <span className="ml-3 text-sm font-bold absolute top-1 right-1 rounded-full px-1 bg-red-500 text-white center self-center">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavBarActions;
