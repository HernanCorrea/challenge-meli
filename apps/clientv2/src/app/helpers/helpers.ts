import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// export default function formatPrice(price: {currency: string, amount: number}) {
//   return `${
//     price.currency === "ARS" ? "$ " : "U$S "
//   }${price.amount.toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")}`;
// }

export default function formatPrice(
  price: number,
  locale = "es-ar",
  currency = "ARS"
) {
  return price.toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}