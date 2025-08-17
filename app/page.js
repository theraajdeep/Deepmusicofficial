export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Deep</h1>
      <p className="text-lg max-w-xl mb-6">
        Singer • Rapper • Lyricist 🎤
      </p>

      <div className="flex gap-4 mb-6">
        <a href="https://youtube.com" className="px-4 py-2 bg-red-600 rounded-lg">YouTube</a>
        <a href="https://instagram.com" className="px-4 py-2 bg-pink-500 rounded-lg">Instagram</a>
        <a href="https://spotify.com" className="px-4 py-2 bg-green-600 rounded-lg">Spotify</a>
      </div>

      <section className="max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Featured Songs</h2>
        <ul className="space-y-2">
          <li className="bg-gray-800 p-4 rounded-lg">Song 1 – Link</li>
          <li className="bg-gray-800 p-4 rounded-lg">Song 2 – Link</li>
          <li className="bg-gray-800 p-4 rounded-lg">Song 3 – Link</li>
        </ul>
      </section>
    </main>
  )
}
