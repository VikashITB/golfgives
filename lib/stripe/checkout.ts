export function checkoutConfig(
  amount: number
) {
  return {
    mode: "payment",
    amount
  };
}
