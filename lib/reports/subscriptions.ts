export function subscriptionReport(
  active: number,
  revenue: number
) {
  return {
    active,
    revenue,
    generatedAt: new Date()
  };
}
