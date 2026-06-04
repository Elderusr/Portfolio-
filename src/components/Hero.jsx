import { FaArrowDown, FaDownload } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiTypescript, SiJavascript } from 'react-icons/si';
import { FaDocker, FaReact } from 'react-icons/fa';

export default function Hero({ scrollToSection }) {
  return (
    <section id="hero" className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Emmanuel YAHI</h1>
        <p className="text-2xl text-gray-500 dark:text-gray-400 mb-6">Backend Developer</p>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Building scalable, efficient, and robust backend systems with Node.js, NestJS, and TypeScript.
          Passionate about creating reliable APIs and solving complex technical challenges.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            View Projects <FaArrowDown className="w-4 h-4" />
          </button>
          <a
            href="/emmanuel-CV.pdf"
            download
            className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            Download CV <FaDownload className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 dark:text-gray-500">
          <SiJavascript className="w-8 h-8 hover:text-yellow-400 transition-colors cursor-pointer" title="JavaScript" />
          <SiNestjs className="w-8 h-8 hover:text-red-500 transition-colors cursor-pointer" title="NestJS" />
          <SiExpress className="w-8 h-8 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer" title="Express" />
          <SiTypescript className="w-8 h-8 hover:text-blue-500 transition-colors cursor-pointer" title="TypeScript" />
          <FaDocker className="w-8 h-8 hover:text-blue-400 transition-colors cursor-pointer" title="Docker" />
          <FaReact className="w-8 h-8 hover:text-cyan-400 transition-colors cursor-pointer" title="React" />
        </div>
      </div>
    </section>
  );
}
