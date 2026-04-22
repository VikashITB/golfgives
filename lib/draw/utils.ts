export function pickWinner(
  entries: string[]
) {
  if (!entries.length) {
    return null;
  }

  const index = Math.floor(
    Math.random() * entries.length
  );

  return entries[index];
}
