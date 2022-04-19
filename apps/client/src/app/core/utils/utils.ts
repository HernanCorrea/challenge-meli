export  function formatPrice(
  price: number,
  locale = 'es-ar',
  currency = 'ARS'
) {
  return price.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
export function formatDecimal(
  price: number,
) {
    return price.toString().substring(price.toString().length - 2);
}
