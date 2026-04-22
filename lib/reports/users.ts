export function userReport(
  total: number
) {
  return {
    users: total,
    generatedAt: new Date()
  };
}
