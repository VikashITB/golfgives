import PageHeader from "@/components/page-header";

const scores = [
  { player: "Ryan Cole", score: -6 },
  { player: "Adam West", score: -4 },
  { player: "Jake Miller", score: -3 }
];

export default function ScoresPage() {
  return (
    <main className="space-y-6">
      <PageHeader
        eyebrow="Scores"
        title="Leaderboard Scores"
        text="Track top performances from recent tournaments."
      />

      <div className="space-y-4">
        {scores.map((item) => (
          <div
            key={item.player}
            className="rounded-3xl border bg-white p-6 shadow-soft flex justify-between"
          >
            <p className="font-semibold">{item.player}</p>
            <p className="text-brand font-bold">{item.score}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
