export function cn(...inputs: (string | undefined | false | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("nl-NL").format(n);
}

export function formatCurrency(n: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}
