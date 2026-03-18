import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroBackground from "../ui/HeroBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 w-full h-full">
        <HeroBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight text-text">
            Gowtham <span className="text-gradient">Murugasamy</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl text-text/80 font-medium mb-6 font-display">
            Software Developer <span className="text-accent">|</span> MERN Stack Engineer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-text/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building Scalable Web Applications with React, TypeScript, and Modern Web Technologies.
          I specialize in building modern, scalable SaaS applications and high-performance web interfaces.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="#projects"
            className="px-8 py-3 bg-accent text-white font-bold rounded-full hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(97,218,251,0.5)] hover:shadow-[0_0_30px_rgba(97,218,251,0.8)]"
          >
            View Projects
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="#contact"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-text font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/10"
          >
            Contact Me
          </motion.a>
          {/* <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="/resume.pdf"
            className="px-8 py-3 border border-text/20 bg-[var(--glass-bg)] backdrop-blur-sm text-text font-medium rounded-full hover:bg-[var(--glass-border)] hover:border-text/40 transition-all duration-300"
          >
            Download Resume
          </motion.a> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a
            href="https://github.com/gowthamm0708"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/60 hover:text-text hover:scale-110 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/gowthamm07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/60 hover:text-text hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:gowthamm0708@gmail.com"
            className="text-text/60 hover:text-text hover:scale-110 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-text/60 hover:text-text transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
