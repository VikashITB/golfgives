const players = [
  { name: "Ryan Cole", score: "-6" },
  { name: "Adam West", score: "-4" },
  { name: "Jake Miller", score: "-3" }
];

export default function Leaderboard() {
  return (
    <section className="py-16">
      <div className="container space-y-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Leaderboard
          </p>
          <h2 className="mt-2 text-3xl font-bold">Top Players This Week</h2>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-soft">
          {players.map((player, index) => (
            <div
              key={player.name}
              className={`flex items-center justify-between py-4 ${
                index !== players.length - 1 ? "border-b" : ""
              }`}
            >
              <p>{player.name}</p>
              <p className="font-semibold text-brand">{player.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
