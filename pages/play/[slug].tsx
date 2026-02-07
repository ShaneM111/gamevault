import { useRouter } from "next/router"
import Script from "next/script"

export default function Play() {
  const { slug } = useRouter().query

  return (
    <div className="min-h-screen px-10 py-12">
      <h1 className="text-3xl font-bold text-neonBlue mb-6">{slug}</h1>
      <canvas
        id="game"
        width={600}
        height={400}
        className="border border-neonPurple bg-black"
      />
      
      {slug === "neon-snake" && (
        <Script src="/games/neon-snake.js" strategy="afterInteractive" />
      )}
    </div>
  )
}
