// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FaBars, FaTimes } from 'react-icons/fa';

// interface NavLink {
//   href: string;
//   label: string;
// }

// const navLinks: NavLink[] = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#education', label: 'Education' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#projects', label: 'Projects' },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = (): void => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const closeMenu = (): void => setIsOpen(false);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 right-0 z-[1000] px-[5vw] flex items-center justify-between h-[70px] transition-all duration-300 ${
//           scrolled ? 'bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border' : 'bg-transparent'
//         }`}
//       >
//         <Link href="#hero" className="font-display text-2xl font-bold text-white no-underline">
//           Alex<span className="text-accent">.</span>
//         </Link>

//         <ul className="hidden md:flex gap-10 items-center list-none">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className="text-muted text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-full after:h-[1px] after:bg-accent after:transition-[right] after:duration-300 hover:after:right-0"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//           <li>
//             <Link
//               href="#contact"
//               className="bg-accent text-bg !text-xs !font-medium !tracking-[0.05em] px-5 py-2 rounded-[3px] transition-all duration-200 hover:bg-[#d4b87a] hover:text-bg"
//             >
//               Contact Me
//             </Link>
//           </li>
//         </ul>

//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden flex flex-col gap-1 cursor-pointer p-1 bg-transparent border-none"
//           aria-label="Menu"
//         >
//           {isOpen ? (
//             <FaTimes className="text-text text-2xl" />
//           ) : (
//             <FaBars className="text-text text-2xl" />
//           )}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-[70px] left-0 right-0 bg-[rgba(10,10,15,0.97)] backdrop-blur-[20px] border-b border-border flex flex-col gap-6 p-8 z-[999] transition-transform duration-300 md:hidden ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {navLinks.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             onClick={closeMenu}
//             className="text-muted text-base font-medium tracking-[0.06em] uppercase transition-colors duration-200 hover:text-accent"
//           >
//             {link.label}
//           </Link>
//         ))}
//         <Link
//           href="#contact"
//           onClick={closeMenu}
//           className="text-muted text-base font-medium tracking-[0.06em] uppercase transition-colors duration-200 hover:text-accent"
//         >
//           Contact
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = (): void => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5vw] flex items-center justify-between h-[70px] transition-all duration-300 ${
          scrolled ? 'bg-[rgba(10,10,15,0.85)] backdrop-blur-[20px] border-b border-border' : 'bg-transparent'
        }`}
      >
        <Link href="#hero" className="font-display text-2xl font-bold text-white no-underline">
          Konkan<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex gap-10 items-center list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted text-xs font-medium tracking-[0.08em] uppercase transition-colors duration-200 hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-full after:h-[1px] after:bg-accent after:transition-[right] after:duration-300 hover:after:right-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="bg-accent text-bg !text-xs !font-medium !tracking-[0.05em] px-5 py-2 rounded-[3px] transition-all duration-200 hover:bg-[#d4b87a] hover:text-bg"
            >
              Contact Me
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 cursor-pointer p-1 bg-transparent border-none"
          aria-label="Menu"
        >
          {isOpen ? <FaTimes className="text-text text-2xl" /> : <FaBars className="text-text text-2xl" />}
        </button>
      </nav>

      <div
        className={`fixed top-[70px] left-0 right-0 bg-[rgba(10,10,15,0.97)] backdrop-blur-[20px] border-b border-border flex flex-col gap-6 p-8 z-[999] transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-muted text-base font-medium tracking-[0.06em] uppercase transition-colors duration-200 hover:text-accent"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;