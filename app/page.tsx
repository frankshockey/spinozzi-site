export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
        Bienvenue chez SpinozziHockey
      </h1>
      <p className="text-lg text-gray-700 mb-10 max-w-xl">
        Formation, développement et passion du hockey sur glace – camps, vidéos, coaching personnalisé.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <a href="/camps" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Nos Camps
        </a>
        <a href="/videos" className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-900 transition">
          Vidéos
        </a>
        <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          Contact
        </a>
      </div>
    </main>
  );
}
