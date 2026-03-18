import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal } from "lucide-react";

const skills = {
  Frontend: [
    "React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"
  ],
  Backend: [
    "Node.js", "Express.js", "REST APIs", "MongoDB"
  ],
  "State Management": [
    "Redux Toolkit", "SWR", "Context API", "Zustand"
  ],
  Tools: [
    "Git", "GitHub", "Docker", "Vite", "VS Code", "Postman"
  ],
  Libraries: [
    "Framer Motion", "GSAP", "Three.js", "D3.js", "React Flow", "Mapbox GL"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-[var(--glass-border)] hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <h3 className="text-2xl font-bold font-display text-text mb-6 flex items-center gap-3">
                {category === "Frontend" && <Layout className="text-accent" />}
                {category === "Backend" && <Server className="text-accent" />}
                {category === "State Management" && <Database className="text-accent" />}
                {category === "Tools" && <Terminal className="text-accent" />}
                {category === "Libraries" && <Code2 className="text-accent" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[var(--glass-bg)] text-text/80 rounded-full text-sm font-medium border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-accent/30 hover:text-text transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
