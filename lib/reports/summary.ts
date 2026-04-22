export function reportSummary(
  totalEvents: number,
  totalRaised: number
) {
  return {
    totalEvents,
    totalRaised,
    generatedAt: new Date()
  };
}
