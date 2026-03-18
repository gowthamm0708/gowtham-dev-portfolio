import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "HRMS Enterprise Platform",
    description: "A complex HR management system supporting payroll, personnel management, and employee workflows.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Material UI", "SWR", "Vite", "Vitest"],
    achievements: [
      "Designed and integrated 4 major enterprise modules",
      "Implemented comprehensive unit testing using Vitest",
      "Reduced API calls by 35% using caching",
      "Improved build performance by 40%"
    ],
    github: "",
    live: ""
  },
  {
    title: "Product Landing Page",
    description: "A high-conversion landing page designed to showcase the HRMS product features and benefits.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    achievements: [
      "Designed and developed the complete UI",
      "Implemented responsive and interactive layout",
      "Optimized performance for high SEO ranking"
    ],
    github: "",
    live: "#"
  },
  {
    title: "Developer Portfolio Website",
    description: "A visually outstanding, interactive portfolio that demonstrates strong frontend engineering skills.",
    tech: ["React", "Framer Motion", "GSAP", "Three.js", "Tailwind CSS"],
    achievements: [
      "Implemented smooth scrolling with Lenis",
      "Integrated 3D visual effects",
      "Achieved 100% Lighthouse performance score"
    ],
    github: "#",
    live: "#"
  },
  {
    title: "Netflix Clone UI",
    description: "A responsive frontend clone of the Netflix interface, featuring dynamic movie rows and a visually immersive UI.",
    tech: ["React", "CSS", "GitHub Pages"],
    achievements: [
      "Built a pixel-perfect responsive UI resembling Netflix",
      "Implemented dynamic movie categorization",
      "Deployed via GitHub Pages for public access"
    ],
    github: "https://github.com/gowthamm0708/Netflix-React-App-Main",
    live: "https://gowthamm0708.github.io/Netflix-React-App-Main/"
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full perspective-1000"
    >
      <div className="glass p-8 rounded-2xl border border-[var(--glass-border)] h-full flex flex-col justify-between transform-style-3d group hover:shadow-[0_0_30px_rgba(97,218,251,0.2)] transition-shadow duration-500">
        <div className="transform-style-3d group-hover:translate-z-10 transition-transform duration-500">
          <h3 className="text-2xl font-bold font-display text-text mb-4 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text/60 mb-6 leading-relaxed text-sm">
            {project.description}
          </p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-text/80 mb-3 uppercase tracking-wider">Key Tech</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1 bg-[var(--glass-bg)] rounded-full text-accent border border-accent/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text/80 mb-3 uppercase tracking-wider">Achievements</h4>
            <ul className="list-disc list-inside text-text/60 text-sm space-y-1">
              {project.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex gap-4 transform-style-3d group-hover:translate-z-20 transition-transform duration-500">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center gap-2 text-sm font-medium text-text/80 hover:text-text transition-colors"
            >
              <Github size={18} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-text transition-colors"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
