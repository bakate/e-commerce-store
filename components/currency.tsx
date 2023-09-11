"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "eur",
});

type CurrencyProps = {
  value: number;
};

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <span className="font-semibold text-gray-900 dark:text-gray-100">
      {formatter.format(value)}
    </span>
  );
};

export default Currency;
