const education = [
  {
    school: 'University of Maiduguri',
    location: 'Maiduguri, Nigeria',
    degree: 'Degree (In Progress)',
    period: '2019 - Present',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Education</h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-1">{edu.location}</p>
              <p className="text-gray-400 dark:text-gray-500 mb-1">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-600">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
