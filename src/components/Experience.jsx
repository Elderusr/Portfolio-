const experiences = [
  {
    title: 'Tech Support',
    company: 'Transcorp Hilton',
    location: 'Abuja, Nigeria',
    period: 'Jul 2024 - Jan 2025',
    highlights: [
      'Customer Support: Delivered prompt, empathetic assistance via phone, consistently enhancing customer satisfaction and resolving inquiries efficiently.',
      'Technical Troubleshooting: Applied analytical and problem-solving skills to diagnose and resolve complex hardware, software, and network issues, ensuring minimal downtime and efficient operations.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Experience</h2>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-20 pb-12" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="absolute left-0 md:left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5" />

              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-1">{exp.company} &bull; {exp.location}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{exp.period}</p>

                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-blue-600 mt-1">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
