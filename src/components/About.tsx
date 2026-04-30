'use client';

const About: React.FC = () => {
  const interests: string[] = ['🏏 Cricket', '📸 Photography', '🚴 Cycling', '✍️ Blogging', '🎵 Music', '📚 Reading', '☕ Coffee Nerd'];

  return (
    <section id="about" className="py-[100px] px-[8vw] bg-bg2">
      <div className="section-header">
        <span className="section-eyebrow">01 — about</span>
        <h2 className="section-title">The Person Behind<br />the <em className="text-accent not-italic">Code</em></h2>
        <div className="section-line"></div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div className="lg:sticky top-[100px]">
          <div className="bg-surface border border-border rounded-[6px] overflow-hidden shadow-2xl">
            <div className="bg-bg3 px-5 py-3 flex items-center gap-2 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff6b6b]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffd93d]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#6bcb77]"></div>
              <span className="font-mono text-[0.72rem] text-muted ml-2">profile.json</span>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Name</span>
                <span className="text-sm text-text font-medium">Konkan Mallick</span>
              </div>
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Role</span>
                <span className="text-sm text-text">Full Stack Developer</span>
              </div>
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Location</span>
                <span className="text-sm text-text">Jessore, Bangladesh 🇧🇩</span>
              </div>
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Email</span>
                <span className="text-sm text-text break-all">konkanmollick@gmail.com</span>
              </div>
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Status</span>
                <span className="text-sm text-[#6bcb77] font-semibold flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6bcb77] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6bcb77]"></span>
                  </span>
                  Open to Work
                </span>
              </div>
              <div className="flex gap-4 mb-3 items-start">
                <span className="font-mono text-[0.72rem] text-accent min-w-[80px] uppercase tracking-[0.06em]">Languages</span>
                <span className="text-sm text-text">Bengali, English</span>
              </div>
              <div className="mt-6 p-4 bg-[rgba(200,169,110,0.05)] border-l-[3px] border-accent rounded-r-[4px] font-display italic text-sm text-muted leading-relaxed">
                &quot;I believe great code is not just functional — it tells a story that other developers want to continue.&quot;
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-muted mb-5 text-[1.02rem] leading-[1.9]">
            My journey into programming started in <strong className="text-text">2022</strong> when I stumbled upon an HTML tutorial out of sheer curiosity. What began as a weekend experiment quickly turned into an obsession. I stayed up nights building websites, breaking things, and learning from every bug I encountered.
          </p>
          <p className="text-muted mb-5 text-[1.02rem] leading-[1.9]">
            Over the years, I&apos;ve evolved from a front-end tinkerer to a <strong className="text-text">Full Stack Software Engineer</strong>. I am equally comfortable designing pixel-perfect UIs with <strong className="text-text">Next.js</strong> as I am architecting robust backends with <strong className="text-text">Node.js, Golang, and PostgreSQL</strong>. I enjoy the full creative cycle — from a blank canvas idea to a production-ready application.
          </p>
          <p className="text-muted mb-5 text-[1.02rem] leading-[1.9]">
            I have a strong focus on <strong className="text-text">Clean Architecture</strong> and performance. My experience building projects like <strong className="text-text">SkillBridge</strong> (a tutoring platform) and <strong className="text-text">codeMaster</strong> (Coding Learning platform) has taught me how to handle complex data structures and user learning effectively.
          </p>
          <p className="text-muted mb-5 text-[1.02rem] leading-[1.9]">
            Currently, I am in <strong className="text-text">Class 11</strong>, balancing my academics with a deep passion for entrepreneurship and technical excellence. Outside of coding, I am an avid <strong className="text-text">cricket</strong> fan and enjoy exploring architectural design and photography.
          </p>
          
          <div className="mt-8">
            <h4 className="font-display text-sm text-white uppercase tracking-widest mb-4">Interests & Hobbies</h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="px-3 py-1.5 bg-surface border border-border text-muted text-xs rounded-full hover:border-accent hover:text-accent transition-colors duration-300">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;