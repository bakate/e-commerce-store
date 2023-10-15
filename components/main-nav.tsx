"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-3 flex items-center justify-between lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg font-medium transition-colors hover:text-black hover:dark:text-white ",
            route.active
              ? "text-black dark:text-gray-100 dark:font-bold"
              : "text-gray-500 dark:text-gray-100 dark:font-normal"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
