// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import herowithbg from "../assets/herowithbg.png"


export default function Hero() {
  return (
    <section className="min-h-screen min-w-screen flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 bg-[#0d0d0d] text-white relative overflow-hidden">
      {/* soft radial glow behind text */}
      <div className="absolute -top-[30%] -left-[30%] w-[160%] h-[160%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0cdcf7]/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="z-10 space-y-6"
      >
        {/* Name */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-none">
          Hi, I'm&nbsp;
          <span className="bg-gradient-to-r from-[#0cdcf7] via-[#ff0088] to-[#fff312] bg-clip-text text-transparent">
            Lakshya
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-[clamp(1rem,2.5vw,1.5rem)] text-slate-300">
          A full-stack developer specializing in building exceptional digital experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/10 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#0cdcf7] via-[#ff0088] to-[#fff312] text-black font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}