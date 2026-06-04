import { FaNodeJs, FaReact, FaDocker, FaGithub, FaHtml5, FaCss3Alt, FaPaypal } from 'react-icons/fa';
import { SiNestjs, SiExpress, SiTypescript, SiJavascript, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Backend & Frameworks',
    icon: null,
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="w-5 h-5 text-green-500" /> },
      { name: 'NestJS', icon: <SiNestjs className="w-5 h-5 text-red-500" /> },
      { name: 'Express', icon: <SiExpress className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Languages',
    icon: null,
    skills: [
      { name: 'JavaScript', icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-blue-500" /> },
    ],
  },
  {
    title: 'Frontend & Styling',
    icon: null,
    skills: [
      { name: 'React', icon: <FaReact className="w-5 h-5 text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-cyan-500" /> },
      { name: 'HTML5', icon: <FaHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="w-5 h-5 text-blue-400" /> },
    ],
  },
  {
    title: 'Databases & Payments',
    icon: null,
    skills: [
      { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-blue-400" /> },
      { name: 'Sequelize', icon: <SiMysql className="w-5 h-5 text-blue-600" /> },
      { name: 'Paystack', icon: <FaPaypal className="w-5 h-5 text-blue-500" /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: null,
    skills: [
      { name: 'Docker', icon: <FaDocker className="w-5 h-5 text-blue-400" /> },
      { name: 'Git', icon: <SiGit className="w-5 h-5 text-orange-600" /> },
      { name: 'GitHub', icon: <FaGithub className="w-5 h-5" /> },
    ],
  },
  {
    title: 'Soft Skills',
    icon: null,
    skills: [
      { name: 'Teamwork', color: 'bg-blue-600' },
      { name: 'Problem Solving', color: 'bg-blue-600' },
      { name: 'Adaptability', color: 'bg-blue-600' },
      { name: 'Critical Thinking', color: 'bg-blue-600' },
      { name: 'Leadership', color: 'bg-blue-600' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">{cat.title}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                    {skill.icon ? (
                      skill.icon
                    ) : (
                      <span className={`w-2 h-2 ${skill.color} rounded-full`} />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
