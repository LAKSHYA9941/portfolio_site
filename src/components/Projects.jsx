import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiMongodb, SiExpress, SiReact, SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si';
import Notemakerimg from '../assets/notemakeimg.jpeg'
import Chaipng from '../assets/chaiproject.png'
import Currconv from '../assets/currency_converter.png';

const projects = [
  {
    name: 'Note-Maker',
    tagline: 'Full-stack notes app with JWT auth, full CRUD and dark-mode glow.',
    live: 'https://mern-notemaker.onrender.com', // <-- UPDATE
    repo: 'https://github.com/LAKSHYA9941/MERN-Notemaker',   // <-- UPDATE
    stack: [
      { icon: <SiReact className="text-[#61DAFB]" />, name: 'React + Vite' },
      { icon: <SiExpress className="text-white" />, name: 'Express' },
      { icon: <SiMongodb className="text-[#4DB33D]" />, name: 'MongoDB' },
      { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
    ],
    bullets: [
      'Secure JWT auth & bcrypt hashing',
      'Pin, search, filter notes in real-time',
      'Responsive glass-morphism UI with dark-mode glow',
      'Clean REST API & reusable React hooks',
    ],
    image: Notemakerimg, // optional hero screenshot
  },
  {
    name: 'Ek-Cup-Chai',
    tagline: 'Patron-powered social platform for creators (WIP).',
    live: undefined, // private / WIP
    repo: undefined,
    stack: [
      { icon: <SiFirebase className="text-[#FFCA28] bg-[#fff0c4] border rounded-4xl drop-shadow-2xl " />, name: 'Firebase' },
      { icon: <SiReact className="text-[#61DAFB]" />, name: 'React 19' },
      { icon: <SiTypescript className="text-[#3178C6]" />, name: 'TypeScript' },
      { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind v4' },
    ],
    bullets: [
      'Google Auth + Firestore real-time DB',
      'QR-code tipping & patron badges',
      'Zustand state + motion page transitions',
      'Image uploads with Firebase Storage',
    ],
    image: Chaipng || '../assets/chaiproject.png',
  },
  {
    name: 'Currency Converter',
    tagline: 'Real-time currency exchange in a sleek, responsive UI.',
    live: 'https://currency190.netlify.app',
    repo: 'https://github.com/LAKSHYA9941/Currency-Converter',
    stack: [
      { icon: <SiReact className="text-[#61DAFB]" />, name: 'React + Vite' },
      { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: 'Tailwind CSS' },
    ],
    bullets: [
      'Fetches live exchange rates via trusted API',
      'Instant conversion while typing',
      'Supports 150+ global currencies',
      'Mobile-first responsive design',
    ],
    image: Currconv,
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-5xl mx-auto px-4 py-6 overflow-y-auto scrollbar-hide"
    >

      <div className="space-y-6">
        {projects.map((p) => (
          <motion.article
            key={p.name}
            whileHover={{ scale: 1.01 }}
            className="group grid md:grid-cols-5 gap-6 items-center"
          >
            {/* Left: Image */}
            <div className="md:col-span-2 rounded-xl overflow-hidden shadow-md">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-auto object-cover aspect-video"
                />
              )}
            </div>

            {/* Right: Content */}
            <div className="md:col-span-3 space-y-3">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {p.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {p.tagline}
              </p>

              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="flex items-center gap-x-3 text-xl">
                {p.stack.map((s) => (
                  <span key={s.name} title={s.name} className="inline-block group bg-gradient-to-b from-stone-300/40 to-transparent p-1 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] hover:bg-gradient-to-t hover:from-stone-200/40 hover:to-white/80 transition-all duration-300">
                    {s.icon}
                  </span>
                ))}
              </div>

              <div className="flex gap-x-4">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:underline"
                  >
                    <FiGithub /> Source
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}