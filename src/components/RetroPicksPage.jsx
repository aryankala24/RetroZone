export default function RetroPicksPage() {
  const retroGames = [
    {
      title: "Return to Castle Wolfenstein",
      description:
        "A gripping first-person shooter with intense atmosphere, combining WWII history with supernatural horror. The enemy AI and stealth missions were ahead of their time.",
      image: "https://i.ytimg.com/vi/ZkLRsOw1d84/maxresdefault.jpg",
    },
    {
      title: "Tekken 3",
      description:
        "One of the finest 3D fighting games ever made. Smooth gameplay, iconic characters, and fluid animations make it an all-time arcade favorite.",
      image:
        "https://i.ytimg.com/vi/2_t0THARpxA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYGqLIEGlKMDR6w8oUt0MoGYLiHQ",
    },
    {
      title: "Contra III: The Alien Wars",
      description:
        "High-octane SNES run-and-gun shooter. It delivers non-stop action with challenging levels and epic boss fights that test reflexes and memory.",
      image: "https://assets-prd.ignimgs.com/2022/01/26/contra3-sq-1643217006478.jpg",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">🎮 Retro Picks</h1>
      <p className="text-gray-400 mb-10">
        Handpicked legendary games that defined generations. From pixel-perfect platformers to unforgettable RPGs.
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {retroGames.map((game, idx) => (
          <div
            key={idx}
            className="bg-gray-900 p-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-yellow-300">{game.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
