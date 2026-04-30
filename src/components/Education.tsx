'use client';

interface EducationItem {
  dot: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  badge: string;
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
   
    {
      dot: '📚',
      year: '2025 - Present',
      title: 'Higher Secondary Certificate (HSC) — Science',
      institution: 'Dumuria College — Khulna, Bangladesh',
      description: 'Currently in 1st year, continuing to excel academically while simultaneously building production-ready software projects. Balancing rigorous academic study with hands-on software development.',
      badge: 'In Progress'
    },
    {
      dot: '🏫',
      year: '2020 – 2025',
      title: 'Secondary School Certificate (SSC) — Science',
      institution: 'Kkantala Secondary School — Khulna, Bangladesh',
      description: 'Strong academic foundation in sciences and mathematics. Class representative in final year.',
      badge: 'GPA: 5.00 / 5.00'
    }
  ];

  return (
    <section id="education" className="py-[100px] px-[8vw] bg-bg2">
      <div className="section-header">
        <span className="section-eyebrow">03 — education</span>
        <h2 className="section-title">Academic <em className="text-accent not-italic">Background</em></h2>
        <div className="section-line"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent2 to-transparent hidden md:block"></div>
        
        {educationData.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10 mb-12 relative">
            <div className="w-[60px] h-[60px] min-w-[60px] bg-surface border-2 border-accent rounded-[4px] flex items-center justify-center text-2xl relative z-[1]">
              {item.dot}
            </div>
            <div className="flex-1 bg-surface border border-border rounded-[6px] p-5 md:p-6 transition-colors hover:border-[rgba(200,169,110,0.3)]">
              <div className="font-mono text-[0.72rem] text-accent tracking-[0.1em] uppercase mb-1">
                {item.year}
              </div>
              <div className="font-display text-lg md:text-xl font-bold text-white mb-1">
                {item.title}
              </div>
              <div className="text-sm text-muted mb-3">
                {item.institution}
              </div>
              <div className="text-sm text-muted leading-relaxed">
                {item.description}
              </div>
              <span className="inline-block mt-3 px-3 py-1 bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.3)] rounded-[2px] font-mono text-[0.7rem] text-accent">
                {item.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
