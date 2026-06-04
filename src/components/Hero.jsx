import { useState, useEffect } from 'react';
import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiTypescript, SiJavascript } from 'react-icons/si';
import { FaDocker, FaReact } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const ROLES = ['Backend Developer', 'Node.js Specialist', 'API Architect', 'Problem Solver'];

export default function Hero({ scrollToSection }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Animated particle background */}
      <ParticlesBackground count={70} />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 dark:via-gray-950/30 to-white dark:to-gray-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="fade-up">
        <div className="inline-block mb-4">
          <span className={`text-sm font-mono text-blue-600 dark:text-blue-400 tracking-widest uppercase bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 transition-all duration-400 inline-block ${isAnimating ? 'opacity-0 -translate-y-2 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
            {ROLES[roleIndex]}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Emmanuel
          </span>{' '}
          <span className="text-gray-900 dark:text-white">YAHI</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
          Building scalable, efficient, and robust backend systems with{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">Node.js</span>,{' '}
          <span className="text-red-500 font-medium">NestJS</span>, and{' '}
          <span className="text-blue-500 font-medium">TypeScript</span>.
          Passionate about creating reliable APIs and solving complex technical challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            View Projects <FaArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a
            href="/emmanuel-CV.pdf"
            download
            className="group border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
          >
            Download CV <FaDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 dark:text-gray-500">
          <SiJavascript className="w-8 h-8 hover:text-yellow-400 transition-colors cursor-pointer hover:scale-110 transition-transform" title="JavaScript" />
          <SiNestjs className="w-8 h-8 hover:text-red-500 transition-colors cursor-pointer hover:scale-110 transition-transform" title="NestJS" />
          <SiExpress className="w-8 h-8 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer hover:scale-110 transition-transform" title="Express" />
          <SiTypescript className="w-8 h-8 hover:text-blue-500 transition-colors cursor-pointer hover:scale-110 transition-transform" title="TypeScript" />
          <FaDocker className="w-8 h-8 hover:text-blue-400 transition-colors cursor-pointer hover:scale-110 transition-transform" title="Docker" />
          <FaReact className="w-8 h-8 hover:text-cyan-400 transition-colors cursor-pointer hover:scale-110 transition-transform" title="React" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
