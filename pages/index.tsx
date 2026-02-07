import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-neonPurple drop-shadow-neon">
        GameVault
      </h1>
      <p className="mt-6 text-gray-300 max-w-xl">
        Play free games. Break them. Learn from them.
      </p>
      <Link href="/games">
        <button className="mt-10 px-8 py-4 bg-neonBlue text-black rounded-xl font-bold hover:scale-105 transition">
          Enter the Vault 🎮
        </button>
      </Link>
    </div>
  )
}
