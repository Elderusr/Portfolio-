import { useState, useContext } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaArrowDown, FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaNodeJs, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiTypescript, SiJavascript, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import ThemeContext from './ThemeContext';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={theme}>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Emmanuel YAHI</div>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                {theme === 'light' ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors md:hidden"
              >
                {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </button>
              <div className="hidden md:flex items-center gap-4">
                <button onClick={() => scrollToSection('experience')} className="text-left hover:text-blue-600 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('education')} className="text-left hover:text-blue-600 transition-colors">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors">Contact</button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-6 py-4">
              <div className="flex flex-col gap-3">
                <button onClick={() => scrollToSection('experience')} className="text-left hover:text-blue-600 transition-colors py-2">Experience</button>
                <button onClick={() => scrollToSection('projects')} className="text-left hover:text-blue-600 transition-colors py-2">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="text-left hover:text-blue-600 transition-colors py-2">Skills</button>
                <button onClick={() => scrollToSection('education')} className="text-left hover:text-blue-600 transition-colors py-2">Education</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors py-2">Contact</button>
              </div>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
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
              <a href="/emmanuel-CV.pdf" download className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Download CV <FaDownload className="w-4 h-4" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400 dark:text-gray-500">
              <SiJavascript className="w-8 h-8 hover:text-yellow-400 transition-colors cursor-pointer" />
              <SiNestjs className="w-8 h-8 hover:text-red-500 transition-colors cursor-pointer" />
              <SiExpress className="w-8 h-8 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer" />
              <SiTypescript className="w-8 h-8 hover:text-blue-500 transition-colors cursor-pointer" />
              <FaDocker className="w-8 h-8 hover:text-blue-400 transition-colors cursor-pointer" />
              <FaReact className="w-8 h-8 hover:text-cyan-400 transition-colors cursor-pointer" />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

            <div className="relative">
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>

              <div className="relative pl-8 md:pl-20 pb-12">
                <div className="absolute left-0 md:left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5"></div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-2">Tech Support</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-1">Transcorp Hilton • Abuja, Nigeria</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">Jul 2024 - Jan 2025</p>

                  <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Customer Support: Delivered prompt, empathetic assistance via phone, consistently enhancing customer satisfaction and resolving inquiries efficiently.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Technical Troubleshooting: Applied analytical and problem-solving skills to diagnose and resolve complex hardware, software, and network issues, ensuring minimal downtime and efficient operations.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              {/* TODO: Add link to the project */}
              <a href="https://github.com/Elderusr/HNG-stage-2" target="_blank" rel="noopener noreferrer">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-96 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-3">Global Insight API</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  A dynamic country data platform designed to manage and serve comprehensive global information through a robust backend architecture.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">Express</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">MySQL</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">Sequelize</span>
                </div>

                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Dynamic data fetching with intelligent caching strategies</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>RESTful endpoints with comprehensive documentation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>On-demand data refresh and visual data summaries</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Robust error handling and input validation</span>
                  </li>
                </ul>
              </div>
              </a>

              <a href="https://github.com/Elderusr/HNG-stage3" target="_blank" rel="noopener noreferrer">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-96 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-3">Devils Advocate</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  An AI Agent built to critically analyze business ideas, new features, and strategic plans, helping identify potential risks before implementation.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">Node.js</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">Mastra Framework</span>
                  <span className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">AI/LLM Integration</span>
                </div>

                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Multidimensional criticism and analysis engine</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Integrated competitor research capabilities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Performance scoring and evaluation metrics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">▸</span>
                    <span>Structured reports highlighting risks and flawed assumptions</span>
                  </li>
                </ul>
              </div>
            </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Backend & Frameworks</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaNodeJs className="w-5 h-5 text-green-500" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiNestjs className="w-5 h-5 text-red-500" />
                    <span>NestJS</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiExpress className="w-5 h-5" />
                    <span>Express</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Languages</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiJavascript className="w-5 h-5 text-yellow-400" />
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiTypescript className="w-5 h-5 text-blue-500" />
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend & Styling</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaReact className="w-5 h-5 text-cyan-400" />
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiTailwindcss className="w-5 h-5 text-cyan-500" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaHtml5 className="w-5 h-5 text-orange-500" />
                    <span>HTML5</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaCss3Alt className="w-5 h-5 text-blue-400" />
                    <span>CSS3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">DevOps & Tools</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaDocker className="w-5 h-5 text-blue-400" />
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <SiGit className="w-5 h-5 text-orange-600" />
                    <span>Git</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 sm:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Soft Skills</h3>
                <div className="space-y-3 text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Teamwork</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Adaptability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Critical Thinking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">University of Maiduguri</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Maiduguri, Nigeria</p>
                <p className="text-gray-400 dark:text-gray-500 mb-1">Degree (In Progress)</p>
                <p className="text-sm text-gray-500 dark:text-gray-600">2019 - Present</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch / Footer */}
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                    <FaEnvelope className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">Email</p>
                      <a href="mailto:emmanuelyahi12@gmail.com" className="hover:text-blue-600 transition-colors">
                        emmanuelyahi12@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                    <FaPhone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">Phone</p>
                      <a href="tel:+2349075299931" className="hover:text-blue-600 transition-colors">
                        +234 907 529 9931
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">Location</p>
                      <p>Maiduguri, Borno State, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 rounded-lg p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3 text-white">Download My CV</h3>
                <p className="text-blue-100 mb-6">Get a copy of my full resume</p>
                <a href="/emmanuel-CV.pdf" download className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Download CV (PDF) <FaDownload />
              </a>
              </div>
            </div>

            <div className="text-center text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-800">
              <p className="mb-2">© 2025 Emmanuel YAHI. All rights reserved.</p>
              <p className="text-sm">Built with passion and modern technologies.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}