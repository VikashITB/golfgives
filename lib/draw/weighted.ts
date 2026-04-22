export function weightedPick<
  T
>(items: T[]) {
  if (!items.length) {
    return null;
  }

  return items[
    Math.floor(Math.random() * items.length)
  ];
}
