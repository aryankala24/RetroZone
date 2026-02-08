import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/10 backdrop-blur-md
        border-b border-yellow-400/40
        px-6 py-4
        max-w-7xl mx-auto
        flex items-center justify-between
        shadow-lg
      "
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="
          flex items-center gap-3
          text-black-400 text-2xl font-extrabold
          select-none
          hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]
          transition-all duration-300
          font-['Press_Start_2P']
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 fill-yellow-400"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 8h12a6 6 0 1 1-5.71 7.87L12 16l-.29-.13A6 6 0 1 1 6 8zm3 2v2H7v2h2v2h2v-2h2v-2h-2v-2H9z" />
        </svg>
        <span>RETROZONE</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-semibold font-mono text-yellow-300">
        <Link to="/retro-picks" className="hover:text-yellow-500 transition">
          Retro Picks
        </Link>
        <Link to="/consoles" className="hover:text-yellow-500 transition">
          Consoles
        </Link>
      </div>
    </nav>
  );
}
