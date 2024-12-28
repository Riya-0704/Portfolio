import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="flex items-center m-8 justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/riya0704/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-2xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Riya-0704"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/RiyaGoyal0704"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-3xl"
        >
          <FaTwitter />
        </a>

        <a
          href="mailto:riyagoyal.rg07@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-stone-50 hover:scale-110 transition-all duration-300 hover:text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
