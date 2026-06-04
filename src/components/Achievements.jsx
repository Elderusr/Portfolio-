import { useEffect, useRef, useState } from 'react';
import { FaCode, FaProjectDiagram, FaRocket, FaCalendarCheck } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaCalendarCheck className="w-6 h-6" />,
    label: 'Years Experience',
    target: 3,
    suffix: '+',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-900',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
  },
  {
    icon: <FaProjectDiagram className="w-6 h-6" />,
    label: 'Projects Built',
    target: 6,
    suffix: '+',
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    borderColor: 'border-purple-200 dark:border-purple-900',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
  },
  {
    icon: <FaCode className="w-6 h-6" />,
    label: 'Technologies',
    target: 12,
    suffix: '+',
    color: 'from-emerald-500 to-teal-500',
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
    borderColor: 'border-emerald-200 dark:border-emerald-900',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    label: 'Commits & Counting',
    target: 500,
    suffix: '+',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-900',
    iconBg: 'bg-amber-100 dark:bg-amber-900/50',
  },
];

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ target, suffix, label, icon, color, bgColor, borderColor, iconBg, iconColor, index }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = easeOutCubic(step / steps);
      current = Math.round(progress * target);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasAnimated, target]);

  return (
    <div
      ref={ref}
      className={`${bgColor} ${borderColor} border rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 group`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icon */}
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <span className={iconColor}>
          {icon}
        </span>
      </div>

      {/* Animated counter */}
      <div className="text-4xl md:text-5xl font-black mb-1">
        <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {count}
        </span>
        <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-sm font-mono text-blue-600 dark:text-blue-400 tracking-widest uppercase bg-blue-50 dark:bg-blue-950/50 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 mb-4 inline-block">
            By The Numbers
          </span>
          <h2 className="text-4xl font-bold mt-4">
            Achievements &amp; Metrics
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-2">
            A snapshot of the journey so far — from code to deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {achievements.map((achievement, i) => (
            <Counter
              key={achievement.label}
              target={achievement.target}
              suffix={achievement.suffix}
              label={achievement.label}
              icon={achievement.icon}
              color={achievement.color}
              iconColor={achievement.iconColor}
              bgColor={achievement.bgColor}
              borderColor={achievement.borderColor}
              iconBg={achievement.iconBg}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
