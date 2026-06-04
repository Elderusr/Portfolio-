import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-up">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8" data-aos="fade-up">
          {/* Contact Info */}
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

              <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                <FaGithub className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">GitHub</p>
                  <a
                    href="https://github.com/Elderusr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    github.com/Elderusr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                <FaLinkedin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/emmanuelyahi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/emmanuelyahi
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV CTA */}
          <div className="bg-blue-600 rounded-lg p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-white">Download My CV</h3>
            <p className="text-blue-100 mb-6">Get a copy of my full resume</p>
            <a
              href="/emmanuel-CV.pdf"
              download
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Download CV (PDF) <FaDownload />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="mb-2">&copy; {year} Emmanuel YAHI. All rights reserved.</p>
          <p className="text-sm">Built with passion and modern technologies.</p>
        </div>
      </div>
    </section>
  );
}
