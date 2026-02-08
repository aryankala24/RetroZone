export default function GameCard({ game }) {
  return (
    <div className="bg-green-100 border-2 border-black p-4 rounded-lg hover:scale-105 transition">
      <img src={game.image} alt={game.title} className="h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{game.title}</h2>
      <p className="text-sm text-gray-700">{game.genre}</p>
    </div>
  );
}
