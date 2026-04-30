import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'skillbridge-01',
    num: '01',
    icon: '🎓',
    name: 'SkillBridge — Student Session Booking System',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    description: 'A professional platform where students can book sessions with expert teachers and mentors.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    fullDescription: 'SkillBridge is an innovative student session booking management system. It bridges the gap between expert teachers and students. Teachers can create and sell their expert sessions, while students can easily browse, book, and learn from the best in the industry. The platform focuses on seamless scheduling and a user-friendly marketplace for knowledge sharing.',
    challenges: [
      'Implementing a dynamic booking calendar that syncs with teacher availability',
      'Ensuring a smooth user experience for both student and teacher dashboards',
      'Optimizing frontend performance for fast session browsing and filtering',
      'Managing complex state transitions for the booking and payment flow'
    ],
    improvements: [
      'Integrating a secure payment gateway for session purchases',
      'Adding a real-time chat feature between students and teachers',
      'Implementing a review and rating system for mentor sessions',
      'Mobile application development for on-the-go learning'
    ],
    gradient: 'from-[#1a1a2e] to-[#c8a96e]', // আপনার থিমের সাথে মিল রেখে গোল্ডেন-ডার্ক গ্রেডিয়েন্ট
    liveUrl: 'https://skillbridge-frontend-rho-nine.vercel.app/',
    githubUrl: 'https://github.com/kankon12/SkrillBridge-Fontend'
  }
];