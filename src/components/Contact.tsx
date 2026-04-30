'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 5000);
  };

  const contactItems = [
    { icon: <FaEnvelope />, label: 'Email', value: 'konkanmollick@gmail.com', href: 'mailto:konkanmollick@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+880 01747528393', href: 'tel:+8801747528393' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+880 01747528393', href: 'https://wa.me/8801747528393' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/konkanmollick', href: 'https://linkedin.com/in/konkanmollick' },
  ];

  return (
    <section id="contact" className="py-[100px] px-[8vw] bg-bg">
      <div className="section-header">
        <span className="section-eyebrow">06 — contact</span>
        <h2 className="section-title">Let's <em className="text-accent not-italic">Connect</em></h2>
        <div className="section-line"></div>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Have a project in mind?
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-8">
            I'm currently available for work .
            Whether it's a quick question or a long-term collaboration — my inbox is always open.
          </p>

          <div className="flex flex-col gap-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-[4px] transition-all duration-200 hover:border-[rgba(200,169,110,0.3)] hover:translate-x-1"
              >
                <div className="w-10 h-10 rounded-[3px] bg-[rgba(200,169,110,0.08)] border border-[rgba(200,169,110,0.2)] flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[0.7rem] text-muted uppercase tracking-[0.08em]">
                    {item.label}
                  </div>
                  <div className="text-sm text-text">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted uppercase tracking-[0.08em]">Your Name</label>
                <input
                  type="text"
                  className="bg-surface border border-border rounded-[4px] p-3 text-text font-body text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,110,0.08)]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-muted uppercase tracking-[0.08em]">Email Address</label>
                <input
                  type="email"
                  className="bg-surface border border-border rounded-[4px] p-3 text-text font-body text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,110,0.08)]"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-muted uppercase tracking-[0.08em]">Subject</label>
              <input
                type="text"
                className="bg-surface border border-border rounded-[4px] p-3 text-text font-body text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,110,0.08)]"
                placeholder="Project Inquiry / Collaboration / ..."
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs text-muted uppercase tracking-[0.08em]">Message</label>
              <textarea
                className="bg-surface border border-border rounded-[4px] p-3 text-text font-body text-sm outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(200,169,110,0.08)] min-h-[140px] resize-y"
                placeholder="Tell me about your project or idea..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-start bg-accent text-bg border-none cursor-pointer px-7 py-3 rounded-[3px] text-sm font-medium tracking-[0.04em] transition-all duration-200 flex items-center gap-2 hover:bg-[#d4b87a] hover:-translate-y-0.5"
            >
              Send Message ✉️
            </button>
            {showMsg && (
              <div className="font-mono text-xs text-green mt-2">
                ✓ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;