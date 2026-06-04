import { FaGithub, FaRobot, FaGlobeAmericas, FaCreditCard, FaFolderOpen, FaGraduationCap, FaPlane } from 'react-icons/fa';
import TiltCard from './TiltCard';

const projectAccents = [
  { from: 'from-blue-600', to: 'to-indigo-700', icon: FaRobot },
  { from: 'from-emerald-600', to: 'to-teal-700', icon: FaGlobeAmericas },
  { from: 'from-purple-600', to: 'to-pink-700', icon: FaCreditCard },
  { from: 'from-orange-600', to: 'to-red-700', icon: FaFolderOpen },
  { from: 'from-cyan-600', to: 'to-blue-700', icon: FaGraduationCap },
  { from: 'from-rose-600', to: 'to-pink-700', icon: FaPlane },
];

const projects = [
  {
    title: 'Devils Advocate',
    repo: 'https://github.com/Elderusr/HNG-stage3',
    description:
      'An AI Agent built to critically analyze business ideas, new features, and strategic plans, helping identify potential risks before implementation.',
    tags: ['Node.js', 'Mastra Framework', 'AI/LLM Integration'],
    highlights: [
      'Multidimensional criticism and analysis engine',
      'Integrated competitor research capabilities',
      'Performance scoring and evaluation metrics',
      'Structured reports highlighting risks and flawed assumptions',
    ],
  },
  {
    title: 'Global Insight API',
    repo: 'https://github.com/Elderusr/HNG-stage-2',
    description:
      'A dynamic country data platform designed to manage and serve comprehensive global information through a robust backend architecture.',
    tags: ['Node.js', 'Express', 'MySQL', 'Sequelize'],
    highlights: [
      'Dynamic data fetching with intelligent caching strategies',
      'RESTful endpoints with comprehensive documentation',
      'On-demand data refresh and visual data summaries',
      'Robust error handling and input validation',
    ],
  },
  {
    title: 'Wallet Service',
    repo: 'https://github.com/Elderusr/stage8-wallet-service',
    description:
      'A payment wallet service integrated with Paystack for seamless transaction processing, balance management, and financial operations.',
    tags: ['Node.js', 'Paystack API', 'MySQL', 'REST API'],
    highlights: [
      'Secure wallet funding, transfers, and withdrawals',
      'Paystack integration for payment processing',
      'Transaction history and balance tracking',
      'Input validation and error handling',
    ],
  },
  {
    title: 'Upload Service',
    repo: 'https://github.com/Elderusr/stage7-upload-service',
    description:
      'A file upload service with support for multiple file types, validation, and secure storage handling.',
    tags: ['Node.js', 'Express', 'File Upload', 'Validation'],
    highlights: [
      'Multi-format file upload support',
      'File type and size validation',
      'Secure storage and retrieval',
      'Error handling and status reporting',
    ],
  },
  {
    title: 'Open School Portal',
    repo: 'https://github.com/Elderusr/open-school-portal-FE',
    description:
      'A frontend portal for an open school management system, providing interfaces for students, teachers, and administrators.',
    tags: ['Frontend', 'React', 'School Management'],
    highlights: [
      'Role-based access interfaces',
      'Responsive design for all devices',
      'Integration with backend services',
      'User-friendly navigation and layouts',
    ],
  },
  {
    title: 'Travel Blog',
    repo: 'https://github.com/Elderusr/travel-blog',
    description:
      'A travel blog platform for sharing travel experiences, destinations, and stories with a clean, engaging layout.',
    tags: ['Web', 'Blog', 'Content'],
    highlights: [
      'Clean article layout and typography',
      'Responsive design for mobile and desktop',
      'Categorized content organization',
    ],
  },
];

function ProjectCard({ project, index }) {
  const accent = projectAccents[index % projectAccents.length];

  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="block"
    >
      <TiltCard maxTilt={12} perspective={1200} glare={true}>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300">
          {/* Gradient header with icon */}
          <div className={`bg-gradient-to-r ${accent.from} ${accent.to} px-6 py-4 flex items-center justify-between`}>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <span className="text-2xl"><accent.icon /></span>
          </div>

          {/* Card body */}
          <div className="p-6 flex flex-col flex-1">
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-xs px-2.5 py-1 rounded-full font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400 mt-auto">
              {project.highlights.map((h, j) => (
                <li key={j} className="flex gap-2">
                  <span className={`shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accent.from} ${accent.to}`} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* GitHub link indicator */}
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <FaGithub className="w-3.5 h-3.5" />
              <span>View on GitHub</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          </div>
        </div>
      </TiltCard>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-3">Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A collection of projects showcasing my expertise in backend architecture, API design, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
