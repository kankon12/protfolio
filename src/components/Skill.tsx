'use client';

import { useEffect, useRef } from 'react';

interface SkillItem {
  name: string;
  pct: number;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.skill-fill');
            fills.forEach((fill) => {
              fill.classList.add('animated');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills: SkillItem[] = [
    { name: 'React.js', pct: 90 },
    { name: 'JavaScript (ES6+)', pct: 88 },
    { name: 'HTML5 / CSS3', pct: 95 },
    { name: 'Tailwind CSS', pct: 85 },
    { name: 'Next.js', pct: 75 },
  ];

  const backendSkills: SkillItem[] = [
    { name: 'Node.js', pct: 85 },
    { name: 'Express.js', pct: 82 },
    { name: 'MongoDB', pct: 80 },
    { name: 'PostgreSQL', pct: 72 },
    { name: 'REST API Design', pct: 88 },
  ];

  const devopsSkills: SkillItem[] = [
    { name: 'Git / GitHub', pct: 90 },
    { name: 'Docker', pct: 65 },
    { name: 'Firebase', pct: 78 },
    { name: 'AWS (EC2, S3)', pct: 60 },
    { name: 'Linux / Bash', pct: 70 },
  ];

  const tools: string[] = [
    'TypeScript', 'Redux', 'GraphQL', 'JWT Auth', 'Stripe API', 'Socket.io',
    'Mongoose', 'Figma', 'Postman', 'Vercel', 'Netlify', 'Heroku', 'VS Code',
    'Notion', 'Jira', 'Webpack', 'Vite', 'Jest'
  ];

  return (
    <section id="skills" className="py-[100px] px-[8vw] bg-bg">
      <div className="section-header">
        <span className="section-eyebrow">02 — skills</span>
        <h2 className="section-title">What I Work <em className="text-accent not-italic">With</em></h2>
        <div className="section-line"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8" ref={skillsRef}>
        {/* Frontend */}
        <div className="bg-surface border border-border rounded-[6px] overflow-hidden hover:border-[rgba(200,169,110,0.3)] transition-colors">
          <div className="px-6 py-4 bg-bg3 border-b border-border flex items-center gap-3">
            <span className="text-xl">🖥</span>
            <span className="font-medium text-sm text-white tracking-[0.04em]">Frontend</span>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {frontendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[0.83rem] text-text">{skill.name}</span>
                  <span className="font-mono text-[0.72rem] text-accent">{skill.pct}%</span>
                </div>
                <div className="h-[3px] bg-faint rounded-[2px] overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-[2px] bg-gradient-to-r from-accent2 to-accent"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-surface border border-border rounded-[6px] overflow-hidden hover:border-[rgba(200,169,110,0.3)] transition-colors">
          <div className="px-6 py-4 bg-bg3 border-b border-border flex items-center gap-3">
            <span className="text-xl">⚙️</span>
            <span className="font-medium text-sm text-white tracking-[0.04em]">Backend</span>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[0.83rem] text-text">{skill.name}</span>
                  <span className="font-mono text-[0.72rem] text-accent">{skill.pct}%</span>
                </div>
                <div className="h-[3px] bg-faint rounded-[2px] overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-[2px] bg-gradient-to-r from-accent2 to-accent"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div className="bg-surface border border-border rounded-[6px] overflow-hidden hover:border-[rgba(200,169,110,0.3)] transition-colors">
          <div className="px-6 py-4 bg-bg3 border-b border-border flex items-center gap-3">
            <span className="text-xl">🛠</span>
            <span className="font-medium text-sm text-white tracking-[0.04em]">DevOps & Other</span>
          </div>
          <div className="p-6 flex flex-col gap-4">
            {devopsSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[0.83rem] text-text">{skill.name}</span>
                  <span className="font-mono text-[0.72rem] text-accent">{skill.pct}%</span>
                </div>
                <div className="h-[3px] bg-faint rounded-[2px] overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-[2px] bg-gradient-to-r from-accent2 to-accent"
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Cloud */}
        <div className="md:col-span-3 bg-surface border border-border rounded-[6px] p-8">
          <h4 className="font-mono text-xs text-muted uppercase tracking-[0.1em] mb-5">⚡ Additional Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <span key={tool} className="tool-chip">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skill-fill.animated {
          animation: fillBar 1.5s ease forwards;
        }
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--w); }
        }
      `}</style>
    </section>
  );
};

export default Skills;