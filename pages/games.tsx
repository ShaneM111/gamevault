import Link from "next/link"

const games = [
  { slug: "neon-snake", name: "Neon Snake" }
]

export default function Games() {
  return (
    <div className="min-h-screen px-10 py-12">
      <h1 className="text-4xl font-bold text-neonGreen mb-8">
        Playable Games
      </h1>

      {games.map(game => (
        <Link key={game.slug} href={`/play/${game.slug}`}>
          <div className="p-6 bg-black/40 rounded-xl border border-neonPurple hover:shadow-neon cursor-pointer">
            {game.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
