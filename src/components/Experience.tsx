'use client';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Testing',
      company: 'm3food— Dhaka, Bangladesh',
      period: 'Jan 2026 — feb 2026',
      description: ' working as a tester at m3food, a leading food delivery platform in Bangladesh. Responsible for designing and executing test cases to ensure the quality and reliability of the mobile app and web platform. Collaborating closely with developers to identify and resolve bugs, and contributing to the overall improvement of the user experience.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Figma'],
    //   isCurrent: true
    },
    // {
    //   role: 'Frontend Developer Intern',
    //   company: 'Soft Logic Limited — Remote',
    //   period: 'Jun 2023 — Dec 2023',
    //   description: 'Built responsive UI components using React and Tailwind CSS for an e-commerce platform serving 50,000+ monthly users. Improved Lighthouse performance score from 62 to 91. Wrote unit tests with Jest and contributed to team code reviews.',
    //   tags: ['React', 'Tailwind', 'Jest', 'REST APIs']
    // },
    // {
    //   role: 'Freelance Web Developer',
    //   company: 'Self-Employed — Fiverr / Upwork',
    //   period: '2022 — Present',
    //   description: 'Delivered 15+ projects for international clients including business websites, portfolio sites, and custom dashboards. Maintained a 5-star rating across platforms. Specialized in MERN stack applications with Firebase authentication.',
    //   tags: ['MERN Stack', 'Firebase', 'WordPress', 'Client Comms']
    // }
  ];

  return (
    <section id="experience" className="py-[100px] px-[8vw] bg-bg">
      <div className="section-header">
        <span className="section-eyebrow">04 — experience</span>
        <h2 className="section-title">Professional <em className="text-accent not-italic">Journey</em></h2>
        <div className="section-line"></div>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-surface border border-border rounded-[6px] p-5 md:p-8 grid md:grid-cols-[1fr_auto] gap-4 transition-all duration-300 hover:border-[rgba(200,169,110,0.3)] hover:translate-x-1"
          >
            <div>
              <div className="font-display text-lg md:text-xl font-bold text-white">
                {exp.role}
              </div>
              <div className="text-sm text-accent mb-2">
                {exp.company}
              </div>
              <div className="text-sm text-muted leading-relaxed">
                {exp.description}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:text-right">
              <div className="font-mono text-xs text-muted">
                {exp.period}
              </div>
              {exp.isCurrent && (
                <div className="inline-block mt-2 px-3 py-1 bg-[rgba(152,195,121,0.1)] border border-[rgba(152,195,121,0.3)] rounded-[10px] text-[0.68rem] text-green uppercase tracking-[0.08em]">
                  Current
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;