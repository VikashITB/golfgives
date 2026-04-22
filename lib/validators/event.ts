export type EventInput = {
  title: string;
  location: string;
  goalAmount: number;
  startsAt: string;
};

export function validateEventInput(
  data: EventInput
) {
  const title = data.title.trim();
  const location = data.location.trim();

  if (title.length < 3) {
    throw new Error("Title is too short.");
  }

  if (location.length < 2) {
    throw new Error("Location is required.");
  }

  if (Number(data.goalAmount) <= 0) {
    throw new Error("Goal amount must be greater than zero.");
  }

  if (!data.startsAt) {
    throw new Error("Start date is required.");
  }

  return {
    title,
    location,
    goalAmount: Number(data.goalAmount),
    startsAt: data.startsAt
  };
}
