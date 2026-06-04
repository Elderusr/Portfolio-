import { useEffect, useRef, useState, useCallback } from 'react';
import { FaNodeJs, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaPaypal } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiTypescript, SiJavascript, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Backend & Frameworks',
    icon: null,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5 text-green-500 shrink-0" />, level: 92 },
      { name: 'NestJS', icon: <SiNestjs className="w-5 h-5 text-red-500 shrink-0" />, level: 85 },
      { name: 'Express', icon: <SiExpress className="w-5 h-5 shrink-0" />, level: 88 },
    ],
  },
  {
    title: 'Languages',
    icon: null,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400 shrink-0" />, level: 92 },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-blue-500 shrink-0" />, level: 82 },
    ],
  },
  {
    title: 'Frontend & Styling',
    icon: null,
    skills: [
      { name: 'React', icon: <FaReact className="w-5 h-5 text-cyan-400 shrink-0" />, level: 75 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-cyan-500 shrink-0" />, level: 70 },
      { name: 'HTML5', icon: <FaHtml5 className="w-5 h-5 text-orange-500 shrink-0" />, level: 85 },
      { name: 'CSS3', icon: <FaCss3Alt className="w-5 h-5 text-blue-400 shrink-0" />, level: 80 },
    ],
  },
  {
    title: 'Databases & Payments',
    icon: null,
    skills: [
      { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-blue-400 shrink-0" />, level: 78 },
      { name: 'Sequelize', icon: <SiMysql className="w-5 h-5 text-blue-600 shrink-0" />, level: 75 },
      { name: 'Paystack', icon: <FaPaypal className="w-5 h-5 text-blue-500 shrink-0" />, level: 72 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: null,
    skills: [
      { name: 'Docker', icon: <FaDocker className="w-5 h-5 text-blue-400 shrink-0" />, level: 70 },
      { name: 'Git', icon: <SiGit className="w-5 h-5 text-orange-600 shrink-0" />, level: 85 },
      { name: 'GitHub', icon: <FaGithub className="w-5 h-5 shrink-0" />, level: 82 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: null,
    skills: [
      { name: 'Teamwork', level: 90, color: 'bg-blue-600' },
      { name: 'Problem Solving', level: 88, color: 'bg-purple-600' },
      { name: 'Adaptability', level: 85, color: 'bg-emerald-600' },
      { name: 'Critical Thinking', level: 82, color: 'bg-amber-600' },
      { name: 'Leadership', level: 78, color: 'bg-rose-600' },
    ],
  },
];

function SkillBar({ name, icon, level, color, index }) {
  const [animated, setAnimated] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animated) return;
    const timer = setTimeout(() => {
      setWidth(level);
    }, index * 60);
    return () => clearTimeout(timer);
  }, [animated, level, index]);

  const barColor = color || (
    level >= 90 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
    level >= 80 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
    level >= 70 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
    'bg-gradient-to-r from-purple-500 to-pink-500'
  );

  const barWidth = level >= 95 ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500' : barColor;

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          {icon && (
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">
              {icon}
            </span>
          )}
          {!icon && color && <span className={`w-2 h-2 ${color} rounded-full shrink-0`} />}
          <span>{name}</span>
        </div>
        <span className={`text-xs font-mono font-bold transition-all duration-500 ${
          animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
        } text-blue-600 dark:text-blue-400`}>
          {animated ? `${level}%` : ''}
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden relative">
        {/* Shimmer effect container */}
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
            animated ? barWidth : ''
          }`}
          style={{ width: animated ? `${width}%` : '0%' }}
        >
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">
          Skills &amp; Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/5"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="text-lg font-bold mb-5 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <span className="w-1 h-5 bg-blue-600 dark:bg-blue-400 rounded-full inline-block" />
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    color={skill.color}
                    index={j}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
