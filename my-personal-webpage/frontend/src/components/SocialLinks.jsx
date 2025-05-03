// components/SocialLinks.jsx
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="flex justify-center gap-6 mt-8 text-white text-4xl">
      <a 
        href="https://www.linkedin.com/in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/dziwGH" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-gray-400 transition"
      >
        <FaGithub />
      </a>
      <a 
        href="https://www.instagram.com/your-username" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-pink-400 transition"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialLinks;
