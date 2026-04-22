export type EventRecord = {
  id: string;
  title: string;
  location: string;
  goalAmount: number;
  raised: number;
  startsAt: Date;
  userId: string;
};

export type DonationRecord = {
  id: string;
  amount: number;
  eventId: string;
  userId: string;
  createdAt: Date;
};
