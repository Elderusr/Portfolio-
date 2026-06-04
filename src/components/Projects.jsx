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

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mt-auto">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-blue-600">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
