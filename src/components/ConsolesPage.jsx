export default function ConsolesPage() {
  const consoles = [
    {
      name: "Sony PlayStation (PS1)",
      description:
        "The PS1 revolutionized gaming with 3D graphics and CD-based media. Its massive game library and iconic titles made it a console no gamer could ignore.",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/30th-anniversary-ps1-timeline-image-block-01-en-11oct24?$facebook$",
    },
    {
      name: "SEGA Genesis",
      description:
        "SEGA's 16-bit powerhouse delivered fast gameplay and unforgettable soundtracks. With classics like Sonic and Streets of Rage, it was the arcade at home.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
    },
    {
      name: "Nintendo Game Boy",
      description:
        "Portable gaming at its finest. Despite the monochrome screen, the Game Boy's design, battery life, and killer apps like Pokémon made it a global success.",
      image:
        "https://epicpanda.dk/images/Gameboy%20Advance%20SP%20-%20Model%20AGS-101%20-%20Tribal%20-%20Konsol%20-%20SNR%20XEH50386348%20(B%20Grade)%20(Genbrug)-t.webp",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">🕹️ Classic Consoles</h1>
      <p className="text-gray-400 mb-10">
        Discover the hardware that powered the golden age of gaming. These consoles made history.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {consoles.map((console, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={console.image}
              alt={console.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-yellow-300">{console.name}</h2>
            <p className="text-gray-400 text-sm mt-1">{console.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
