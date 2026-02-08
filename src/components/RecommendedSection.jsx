import React from "react";
import { useNavigate } from "react-router-dom";

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

export default function RecommendedSection() {
  const navigate = useNavigate();

  // Create a safe gameId slug from title (e.g., "IGI2" => "igi2")
  const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const handleViewReview = (item) => {
    const gameId = slugify(item.title);
    // Navigate to the review page for this game
    navigate(`/review/${gameId}`);
  };

  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-2xl font-extrabold mb-6 text-yellow-400 tracking-wider font-mono uppercase border-b border-yellow-400 inline-block">
        🎮 Recommended for You
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-800 via-black to-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 group border border-yellow-300 flex flex-col"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            <div className="p-3 text-sm font-mono tracking-tight text-yellow-100 group-hover:text-yellow-300 transition">
              {item.title}
            </div>

            <div className="p-3 pt-0">
              <button
                onClick={() => handleViewReview(item)}
                className="w-full block text-center bg-yellow-500 text-black font-semibold text-xs uppercase rounded-md py-2 hover:bg-yellow-600 transition"
              >
                MY REVIEW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
