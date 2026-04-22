export function drawReport(
  total: number
) {
  return {
    draws: total,
    generatedAt: new Date()
  };
}
