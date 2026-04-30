// 'use client';

// import { useEffect } from 'react';
// import { Project } from '@/types';

// interface ProjectModalProps {
//   project: Project | null;
//   onClose: () => void;
// }

// const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
//   useEffect(() => {
//     if (project) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }

//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };
//     document.addEventListener('keydown', handleEscape);
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = '';
//     };
//   }, [project, onClose]);

//   if (!project) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[2000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
//       onClick={onClose}
//     >
//       <div
//         className="bg-bg2 border border-border rounded-[8px] max-w-[780px] w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="sticky top-0 bg-bg2 z-[1] px-6 md:px-10 pt-8 pb-4 border-b border-border flex justify-between items-start">
//           <div>
//             <div className="font-mono text-[0.7rem] text-accent mb-1">
//               Project {project.num}
//             </div>
//             <div className="font-display text-2xl md:text-3xl font-bold text-white">
//               {project.name.split(' — ')[0]}
//             </div>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-9 h-9 rounded-[4px] border border-border text-muted transition-all duration-200 flex items-center justify-center hover:border-accent hover:text-accent"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-6 md:p-10">
//           <div className={`h-48 rounded-[4px] overflow-hidden mb-8 bg-surface border border-border flex items-center justify-center text-7xl bg-gradient-to-br ${project.gradient}`}>
//             {project.icon}
//           </div>

//           <div className="mb-6">
//             <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Tech Stack</h4>
//             <div className="flex flex-wrap gap-2">
//               {project.techStack.map((tech) => (
//                 <span key={tech} className="tool-chip">{tech}</span>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Description</h4>
//             <p className="text-sm text-muted leading-relaxed">{project.fullDescription}</p>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Live Links</h4>
//             <div className="flex gap-4 flex-wrap">
//               <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm bg-accent text-bg transition-all hover:bg-[#d4b87a]">
//                 🌐 Live Demo
//               </a>
//               <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm bg-bg3 text-text border border-border transition-all hover:border-accent hover:text-accent">
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
//                 GitHub
//               </a>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Challenges Faced</h4>
//             <ul className="list-none">
//               {project.challenges.map((challenge, idx) => (
//                 <li key={idx} className="text-sm text-muted py-1.5 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-red">
//                   {challenge}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Future Plans & Improvements</h4>
//             <ul className="list-none">
//               {project.improvements.map((improvement, idx) => (
//                 <li key={idx} className="text-sm text-muted py-1.5 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-green">
//                   {improvement}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default //ProjectModal;

// 'use client';

import { useEffect } from 'react';
import { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-bg2 border border-border rounded-[8px] max-w-[780px] w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="sticky top-0 bg-bg2 z-[1] px-6 md:px-10 pt-8 pb-4 border-b border-border flex justify-between items-start">
          <div>
            <div className="font-mono text-[0.7rem] text-accent mb-1">
              Project {project.num}
            </div>
            <div className="font-display text-2xl md:text-3xl font-bold text-white">
              {project.name.split(' — ')[0]}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-[4px] border border-border text-muted transition-all duration-200 flex items-center justify-center hover:border-accent hover:text-accent"
          >
            ✕
          </button>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10">
          {/* Icon/Image Banner */}
          <div className={`h-48 rounded-[4px] overflow-hidden mb-8 bg-surface border border-border flex items-center justify-center text-7xl bg-gradient-to-br ${project.gradient}`}>
            {project.icon}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tool-chip px-3 py-1 bg-bg3 border border-border rounded text-xs text-text">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Description</h4>
            <p className="text-sm text-muted leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Live Links */}
          <div className="mb-6">
            <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Live Links</h4>
            <div className="flex gap-4 flex-wrap">
              <a 
                href="https://skillbridge-frontend-rho-nine.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm bg-accent text-bg font-semibold transition-all hover:bg-[#d4b87a]"
              >
                🌐 Live Demo
              </a>
              <a 
                href="https://github.com/kankon12/SkrillBridge-Fontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[3px] text-sm bg-bg3 text-text border border-border transition-all hover:border-accent hover:text-accent"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-6">
            <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Challenges Faced</h4>
            <ul className="list-none">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="text-sm text-muted py-1.5 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-accent">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Improvements */}
          <div>
            <h4 className="font-mono text-[0.72rem] text-accent uppercase tracking-[0.12em] mb-2">Future Plans & Improvements</h4>
            <ul className="list-none">
              {project.improvements.map((improvement, idx) => (
                <li key={idx} className="text-sm text-muted py-1.5 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-green-500">
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;