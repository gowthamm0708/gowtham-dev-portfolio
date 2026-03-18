import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Transond Systems",
    role: "Junior Software Developer",
    period: "May 2025 - Present",
    achievements: [
      "Designed and developed the product landing page",
      "Built 20+ reusable UI components",
      "Implemented enterprise HR modules",
      "Reduced API calls by 35%",
      "Migrated architecture to React 18 + Vite"
    ]
  },
  {
    company: "Transond Systems",
    role: "Frontend Developer Intern",
    period: "Feb 2025 - May 2025",
    achievements: [
      "Built web applications using React, Tailwind CSS, Bootstrap, and TypeScript",
      "Implemented CRUD functionality and API integrations",
      "Contributed to real-world projects in a professional environment"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 to-secondary/50"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10 shadow-[0_0_10px_#61dafb] border-2 border-primary"></div>

              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div className="glass p-6 md:p-8 rounded-2xl border border-[var(--glass-border)] hover:border-accent/30 transition-all duration-300 hover:bg-[var(--glass-bg)]">
                  <div className="flex items-center gap-2 text-accent mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-text/60 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-text/80 space-y-2 text-sm">
                    {exp.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
