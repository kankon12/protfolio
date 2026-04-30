'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg3 border-t border-border py-10 px-[8vw] flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="font-display text-xl font-bold text-white">
        Konkan<span className="text-accent">.</span>Mallick
      </div>
      <div className="text-xs text-muted font-mono text-center">
        Designed & Developed with ♥ by <span className="text-accent">konkan Mallick</span> · © 2026
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/kankon12" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent">
          <FaGithub size={14} />
        </a>
        <a href="https://www.linkedin.com/in/konkan-mallick-b54a53281/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent">
          <FaLinkedin size={14} />
        </a>
        <a href="https://twitter.com/kankon12" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent">
          <FaTwitter size={14} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;