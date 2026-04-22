export function charityReport(
  total: number
) {
  return {
    charities: total,
    generatedAt: new Date()
  };
}
