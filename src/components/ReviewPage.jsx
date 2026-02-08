import React from "react";

const recommendations = [
  { title: "IGI2", img: "https://sc.filehippo.net/images/t_app-cover-s,f_auto/p/20a5686b-74bf-473a-a456-f0fb0e3bcbbd/4041835189/igi-2-covert-strike-single-player-demo-screenshot" },
  { title: "PITFALL : THE MAYAN ADVENTURE", img: "https://assets-prd.ignimgs.com/2022/03/29/pitfallmayan-1648578326770.jpg" },
  { title: "SPIDERMAN (2000)", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Spider-Man_2000_game_cover.jpg/250px-Spider-Man_2000_game_cover.jpg" },
  { title: "GRAND THEFT AUTO : VICE CITY", img: "https://blogs.gomechanic.com/wp-content/uploads/2022/10/Gta-vice-city-ft.jpg" },
  { title: "NEED FOR SPEED: UNDERGROUND 2", img: "https://i.ytimg.com/vi/ATkYMnlwHpY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqQQpgytAri58Z62ZB1G2sfZQ6sg" },
  { title: "DISNEY ACTIVE PLAY : A BUG'S LIFE", img: "https://i.ytimg.com/vi/CY0Aa00ZuM4/maxresdefault.jpg" },
  { title: "MAX PAYNE 2", img: "https://i.ytimg.com/vi/Et9_VpXn-xA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBA1uibQtNnn9WKgN7HzqePJIOsRg" },
  { title: "CONTRA", img: "https://i.ytimg.com/vi/zLOSkIVd3Zw/maxresdefault.jpg" },
];

const reviews = {
  "IGI2": `IGI2 isn’t just a game—it’s a stealthy adrenaline rush.
Every mission feels like a spy thriller. You hold your breath sneaking past guards.
The tension, the silence, the challenge—it’s thrilling.
It rewards planning over chaos and feels so rewarding when done right.
A must-play if you love tactical gameplay with depth.`,

  "PITFALL : THE MAYAN ADVENTURE": `Pitfall takes you back to pixel-perfect platforming bliss.
It’s a wild, colorful journey through Mayan myths with tight jumps and tricky traps.
The music and visuals feel like a cozy 90s cartoon.
Each level brings a nostalgic hit that never gets old.
It's classic gaming with heart and soul.`,

  "SPIDERMAN (2000)": `Web-swinging across rooftops never felt so exciting back then.
Spiderman (2000) has charm, heart, and those classic comic vibes.
Yes, it’s a bit clunky, but that makes it lovable.
Fighting villains with web tricks is still fun after all these years.
This is where Spidey’s gaming legacy began.`,

  "GRAND THEFT AUTO : VICE CITY": `Vice City is like jumping into a neon-soaked 80s action movie.
The music, fashion, and open-world chaos feel alive and wild.
From fast cars to wild missions, it’s unforgettable mayhem.
Every corner of the city tells a story.
It's not just a game—it's a vibe.`,

  "NEED FOR SPEED: UNDERGROUND 2": `Underground 2 is where street racing meets style.
The customization is deep and personal—your car, your rules.
Night races light up the city, and the thrill is real.
The soundtrack pumps adrenaline with every drift.
It’s more than racing—it’s a lifestyle.`,

  "DISNEY ACTIVE PLAY : A BUG'S LIFE": `A Bug’s Life is adorable and light-hearted—pure Disney joy.
It’s designed for kids but charming for everyone.
Mini-games are fun, colorful, and full of imagination.
Perfect for playful afternoons and big smiles.
Great for families or nostalgia trips.`,

  "MAX PAYNE 2": `Max Payne 2 feels like a gritty detective novel in motion.
The bullet-time action is smooth and cinematic.
Tragedy, love, revenge—it’s emotionally heavy yet stylish.
You feel every line Max says, every shot he fires.
This is storytelling in a shooter at its best.`,

  "CONTRA": `Contra is a no-holds-barred run-and-gun classic.
Explosions, enemies, and chaos from the first second.
It's brutally hard but insanely addictive.
Each victory feels earned, each level a battle.
An arcade legend that still tests your reflexes.`,
};

// Slugify helper (same as in RecommendedSection)
const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function ReviewPage({ gameId }) {
  // Find item by matching slug
  const item = recommendations.find((rec) => slugify(rec.title) === gameId);

  if (!item) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-yellow-400 font-mono p-4">
        <p>Sorry, review not found for "{gameId}"</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="bg-gray-900 max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 text-white bg-red-600 hover:bg-red-700 px-4 py-1 rounded-md font-bold z-50"
        >
          ✕
        </button>

        {/* Title */}
        <div className="p-6 pb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 font-mono">
            {item.title}
          </h1>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
        </div>

        {/* Review */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-3 font-sans border-b border-yellow-400 inline-block text-yellow-400">
            Review
          </h2>
          <p className="text-yellow-100 whitespace-pre-line text-lg leading-relaxed font-serif italic mt-3">
            {reviews[item.title] || "No review available yet."}
          </p>
          <p className="text-right text-sm text-yellow-400 mt-4 italic font-mono">
            — Aryan Kala
          </p>
        </div>
      </div>
    </div>
  );
}
