// 'use client';

// import { useState, useEffect } from 'react';
// import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
// import { HiDownload } from 'react-icons/hi';

// const phrases: string[] = ['Full Stack Developer', 'React Developer', 'Node.js Engineer', 'UI/UX Enthusiast'];

// const Hero: React.FC = () => {
//   const [text, setText] = useState<string>('');
//   const [pi, setPi] = useState<number>(0);
//   const [ci, setCi] = useState<number>(0);
//   const [deleting, setDeleting] = useState<boolean>(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       const word = phrases[pi];
//       if (!deleting) {
//         setText(word.substring(0, ci + 1));
//         if (ci + 1 === word.length) {
//           setTimeout(() => {}, 1800);
//           setDeleting(true);
//         } else {
//           setCi(ci + 1);
//         }
//       } else {
//         setText(word.substring(0, ci - 1));
//         if (ci - 1 === 0) {
//           setDeleting(false);
//           setPi((pi + 1) % phrases.length);
//           setCi(0);
//         } else {
//           setCi(ci - 1);
//         }
//       }
//     }, deleting ? 60 : 100);
//     return () => clearTimeout(timer);
//   }, [ci, deleting, pi]);

//   const handleResume = (e: React.MouseEvent<HTMLButtonElement>): void => {
//     e.preventDefault();
//     alert('📄 Resume coming soon! Please contact me directly via email for my latest CV.');
//   };

//   return (
//     <section id="hero" className="min-h-screen grid md:grid-cols-2 items-center px-[8vw] pt-[120px] pb-20 relative overflow-hidden gap-16">
//       <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent_49.5%,#333345_49.5%,#333345_50.5%,transparent_50.5%),linear-gradient(0deg,transparent_49.5%,#333345_49.5%,#333345_50.5%,transparent_50.5%)] bg-[size:100px_100px] opacity-15"></div>
//       <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,169,110,0.08)_0%,transparent_70%)] top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

//       <div className="relative z-[1] opacity-0 animate-fade-up">
//         <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-[0.12em] uppercase mb-6 px-3 py-1 border border-[rgba(200,169,110,0.3)] rounded-[2px] before:content-['//'] before:opacity-60">
//           Available For Work
//         </div>
//         <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.05] text-white mb-2">
//           Konkan<br /><span className="text-accent italic">Mallick</span>
//         </h1>
//         <p className="font-mono text-base text-muted mb-6 tracking-[0.04em]">
//           <span>{text || 'Full Stack Developer'}</span>
//           <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-0.5 animate-blink align-text-bottom"></span>
//         </p>
//         <p className="text-[1.05rem] text-muted max-w-[480px] mb-10 leading-[1.8]">
//           building production-grade web apps with Next.js, TypeScript, Docker & AWS. Obsessed with clean architecture and shipping things that work.
//         </p>
//         <div className="flex gap-4 flex-wrap mb-10">
//           <button onClick={handleResume} className="btn-primary">
//             <HiDownload /> Download Resume
//           </button>
//           <a href="#projects" className="btn-secondary">
//             View Projects →
//           </a>
//         </div>
//         <div className="flex gap-4">
//           <a href="https://github.com/kankon12" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(200,169,110,0.05)]">
//             <FaGithub size={18} />
//           </a>
//           <a href="https://www.linkedin.com/in/konkan-mallick-b54a53281/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(200,169,110,0.05)]">
//             <FaLinkedin size={18} />
//           </a>
//           <a href="https://x.com/KonkanMoll50360" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(200,169,110,0.05)]">
//             <FaTwitter size={18} />
//           </a>
//           {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-[3px] border border-border flex items-center justify-center text-muted transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(200,169,110,0.05)]">
//             <FaFacebook size={18} />
//           </a> */}
//         </div>
//       </div>

//       <div className="relative z-[1] flex justify-center items-center opacity-0 animate-fade-up animation-delay-200">
//         <div className="relative w-[280px] md:w-[380px] h-[350px] md:h-[480px]">
//           <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] border-2 border-accent rounded-[4px] z-0 hidden md:block"></div>
//           <div className="w-full h-full bg-surface rounded-[4px] border border-border flex flex-col items-center justify-center relative z-[1] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-bg3 before:via-surface before:to-[rgba(200,169,110,0.05)]">
//             <div className="text-8xl relative z-[1] filter grayscale-[0.3]">🧑‍💻</div>
//             <div className="relative z-[1] mt-4 font-display text-base text-accent">Konkan Mallick</div>
//           </div>
//           <div className="absolute -bottom-5 left-0 right-0 md:right-auto md:left-auto md:bottom-[-20px] md:right-[-10px] bg-surface border border-border rounded-[4px] p-4 flex gap-6 z-[2] justify-center">
//             <div className="text-center">
//               <span className="font-display text-2xl font-bold text-accent block">3+</span>
//               <span className="text-[0.7rem] text-muted uppercase tracking-[0.08em]">Years Exp</span>
//             </div>
//             <div className="text-center">
//               <span className="font-display text-2xl font-bold text-accent block">20+</span>
//               <span className="text-[0.7rem] text-muted uppercase tracking-[0.08em]">Projects</span>
//             </div>
//             <div className="text-center">
//               <span className="font-display text-2xl font-bold text-accent block">15+</span>
//               <span className="text-[0.7rem] text-muted uppercase tracking-[0.08em]">Clients</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const phrases: string[] = ['Full Stack Developer', 'React Developer', 'Node.js Engineer', 'Software Engineer'];

const Hero: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [pi, setPi] = useState<number>(0);
  const [ci, setCi] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const word = phrases[pi];
      if (!deleting) {
        setText(word.substring(0, ci + 1));
        if (ci + 1 === word.length) {
          setTimeout(() => {}, 1800);
          setDeleting(true);
        } else {
          setCi(ci + 1);
        }
      } else {
        setText(word.substring(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setPi((pi + 1) % phrases.length);
          setCi(0);
        } else {
          setCi(ci - 1);
        }
      }
    }, deleting ? 60 : 100);
    return () => clearTimeout(timer);
  }, [ci, deleting, pi]);

  // Resume Not Ready Popup Function
  const handleResumeClick = () => {
    alert('📄 Resume is not ready yet! Please contact me directly via email for my latest CV.');
  };

  return (
    <section id="hero" className="min-h-screen grid md:grid-cols-2 items-center px-[8vw] pt-[120px] pb-20 relative overflow-hidden gap-16">
      {/* Background Grids */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,transparent_49.5%,#333345_49.5%,#333345_50.5%,transparent_50.5%),linear-gradient(0deg,transparent_49.5%,#333345_49.5%,#333345_50.5%,transparent_50.5%)] bg-[size:100px_100px] opacity-15"></div>
      
      {/* Left Content */}
      <div className="relative z-[1] animate-fade-up">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-[0.12em] uppercase mb-6 px-3 py-1 border border-[rgba(200,169,110,0.3)] rounded-[2px]">
          Available For Work
        </div>
        <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black leading-[1.05] text-white mb-2">
          Konkan<br /><span className="text-accent italic">Mallick</span>
        </h1>
        <p className="font-mono text-base text-muted mb-6 tracking-[0.04em]">
          <span>{text || 'Full Stack Developer'}</span>
          <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-0.5 animate-blink align-text-bottom"></span>
        </p>
        <p className="text-[1.05rem] text-muted max-w-[480px] mb-10 leading-[1.8]">
          Building production-grade web apps with Next.js, TypeScript, and Node.js. Obsessed with clean architecture and shipping things that work.
        </p>
        
        <div className="flex gap-4 flex-wrap mb-10">
          {/* Resume Button with Popup */}
          <button 
            onClick={handleResumeClick}
            className="btn-primary flex items-center gap-2 px-6 py-3 bg-accent text-bg rounded-[3px] font-bold transition-all hover:opacity-90"
          >
            <HiDownload /> Download Resume
          </button>
          
          <a href="#projects" className="btn-secondary border border-border px-6 py-3 rounded-[3px] text-white hover:bg-white/5 transition-all">
            View Projects →
          </a>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/kankon12" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"><FaGithub size={18} /></a>
          <a href="https://www.linkedin.com/in/konkan-mallick-b54a53281/" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"><FaLinkedin size={18} /></a>
          <a href="https://x.com/KonkanMoll50360" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"><FaTwitter size={18} /></a>
        </div>
      </div>

      {/* Right Image Section (Animated & Round) */}
      <div className="relative z-[1] flex justify-center items-center animate-fade-up animation-delay-300">
        <div className="relative group">
          
          {/* Floating Wrapper */}
          <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] animate-float">
            
            {/* Rotating Decorative Circle */}
            <div className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full animate-spin-slow"></div>
            
            {/* Main Round Image Container */}
            <div className="absolute inset-4 rounded-full border-4 border-accent shadow-[0_0_50px_rgba(200,169,110,0.2)] overflow-hidden bg-surface">
              <img 
                src="/konkan.jpg" 
                alt="Konkan Mallick" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="font-display text-xs text-accent bg-bg/80 px-2 py-1 rounded-full">Konkan Mallick</span>
              </div>
            </div>

            {/* Floating Stats Badges */}
            <div className="absolute -right-4 top-10 bg-surface border border-border p-3 rounded-xl shadow-xl z-[2] hidden md:block">
              <span className="font-display text-xl font-bold text-accent block">Fresher</span>
              <span className="text-[0.6rem] text-muted uppercase tracking-wider">Experience</span>
            </div>

            <div className="absolute -left-6 bottom-16 bg-surface border border-border p-3 rounded-xl shadow-xl z-[2] hidden md:block">
              <span className="font-display text-xl font-bold text-accent block">3+</span>
              <span className="text-[0.6rem] text-muted uppercase tracking-wider">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;