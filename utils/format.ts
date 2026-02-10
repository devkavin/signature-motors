export const currencyLKR = (value: number) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0
  }).format(value);

export const numberFormat = (value: number) => new Intl.NumberFormat("en-LK").format(value);
