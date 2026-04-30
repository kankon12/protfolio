'use client';

import { useState } from 'react';
import { projectsData } from '@/data/projectsData';
import ProjectModal from './ProjectModal';
import { Project } from '@/types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="py-[100px] px-[8vw] bg-bg2">
        <div className="section-header">
          <span className="section-eyebrow">05 — projects</span>
          <h2 className="section-title">Featured <em className="text-accent not-italic">Work</em></h2>
          <div className="section-line"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-surface border border-border rounded-[6px] overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:border-[rgba(200,169,110,0.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <div className="h-[200px] overflow-hidden relative">
                <div
                  className={`w-full h-full flex items-center justify-center text-5xl transition-transform duration-400 bg-gradient-to-br ${project.gradient}`}
                >
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                <span className="absolute top-3 right-3 font-mono text-[0.7rem] text-accent opacity-70">
                  {project.num}
                </span>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[rgba(124,111,207,0.1)] border border-[rgba(124,111,207,0.25)] rounded-[2px] font-mono text-[0.65rem] text-[#9d95d9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="font-display text-lg font-bold text-white mb-2">
                  {project.name}
                </div>
                <div className="text-sm text-muted leading-relaxed">
                  {project.description}
                </div>
              </div>
              <div className="p-4 border-t border-border flex justify-between items-center">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.3)] rounded-[3px] text-accent text-sm transition-all duration-200 hover:bg-accent hover:text-bg">
                  View Details →
                </button>
                <span className="text-muted text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;