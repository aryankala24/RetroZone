import { FaYoutube, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-16">
      {/* Grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M6 8h12a6 6 0 1 1-5.71 7.87L12 16l-.29-.13A6 6 0 1 1 6 8zm3 2v2H7v2h2v2h2v-2h2v-2h-2v-2H9z" />
            </svg>
            <h2 className="text-2xl font-bold text-yellow-400">RetroZone</h2>
          </div>
          <p className="text-sm text-gray-400">
            Your ultimate portal to the golden age of gaming. PS1 to PC Gaming — we cover it all.
          </p>
        </div>

        {/* Spacer column for layout balance on desktop */}
        <div className="hidden md:block"></div>

        {/* Social + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">Connect</h3>
          <ul className="flex gap-4 text-2xl text-gray-300">
            <li>
              <a
                href="https://www.youtube.com/@AryanPaaji"
                className="hover:text-yellow-400"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aryan-kala-5b4065260/"
                className="hover:text-yellow-400"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aryankala24/my-projects"
                className="hover:text-yellow-400"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:aryankala250@gmail.com"
                className="hover:text-yellow-400"
                aria-label="Gmail"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-4">
        <img
          src="/aryan.jpg"
          alt="Aryan Kala"
          className="w-10 h-10 object-cover rounded-full border-2 border-yellow-400"
        />
        <p className="text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-yellow-400 font-semibold">RetroZone</span> by{' '}
          <span className="text-yellow-400 font-semibold">Aryan Kala</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
