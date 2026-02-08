import { useEffect, useState } from "react";

const games = [
  {
    title: "Captain Claw",
    desc: "Set sail with the fierce feline pirate! Treasure hunts, sword fights, and old-school platforming at its best.",
    videoId: "3EGfeV-6kMc",
    rating: "9.5",
  },
  {
    title: "Virtua Cop 2 (VCOP2)",
    desc: "Reload your memories! VCOP2 was the ultimate arcade police shooter of the late 90s.",
    videoId: "1mfcOymn_ME",
    rating: "9.4",
  },
  {
    title: "Road Rash",
    desc: "Kick, race, and ride through traffic with this gritty, rebellious biker classic.",
    videoId: "C5jfULfPcvM",
    rating: "9.2",
  },
  {
    title: "Prince of Persia: Classic",
    desc: "From deadly traps to sword fights — the original time-bending adventure begins here.",
    videoId: "UgKP0kYnGmU",
    rating: "9.1",
  },
  {
    title: "Disney: The Incredibles - Rise of the Underminder",
    desc: "Team up with Mr. Incredible and Frozone to take down the evil Underminer in this explosive Pixar sequel game.",
    videoId: "F_agE1164Rc",
    rating: "9.4",
  },
  {
    title: "Harry Potter and the Philosopher’s Stone (2001 Game)",
    desc: "Step into Hogwarts with spell-casting, troll-fighting magic in this beloved classic.",
    videoId: "C19TWO7T3XU",
    rating: "9.3",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % games.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const currentGame = games[current];

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden text-white">
      {/* 🎬 YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${currentGame.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentGame.videoId}&controls=0&modestbranding=1&showinfo=0&rel=0&vq=hd1080`}
          title={currentGame.title}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-8 py-16 flex flex-col justify-center h-full max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-300 mb-4 drop-shadow flex items-center gap-2">
          {/* SVG Game Controller */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 fill-yellow-300"
            viewBox="0 0 24 24"
          >
            <path d="M6 8h12a6 6 0 1 1-5.71 7.87L12 16l-.29-.13A6 6 0 1 1 6 8zm3 2v2H7v2h2v2h2v-2h2v-2h-2v-2H9z" />
          </svg>
          {currentGame.title}
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">{currentGame.desc}</p>

      </div>

      {/* ⭐ Rating Badge */}
      <div className="absolute top-4 right-4 z-30 bg-yellow-300 text-black text-lg font-bold px-4 py-2 rounded-full shadow-lg">
        ⭐ {currentGame.rating} / 10
      </div>
    </section>
  );
}
