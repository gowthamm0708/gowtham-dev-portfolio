import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass p-8 md:p-10 rounded-2xl border border-[var(--glass-border)] shadow-2xl">
              <p className="text-text/80 text-lg leading-relaxed mb-6 font-light">
                I am a Software Developer based in <span className="text-text font-semibold">Coimbatore, India</span>. 
                I specialize in building scalable web applications using modern technologies like 
                <span className="text-accent font-semibold"> React</span>, 
                <span className="text-secondary font-semibold"> TypeScript</span>, and 
                <span className="text-green-500 font-semibold"> Node.js</span>.
              </p>
              <p className="text-text/80 text-lg leading-relaxed mb-6 font-light">
            Currently working as a Junior Software Developer at <span className="text-text font-semibold">Transond Systems</span>, 
            where I started as an intern and now develop enterprise-grade web applications.
          </p>
              <p className="text-text/80 text-lg leading-relaxed font-light">
                I enjoy solving complex problems, optimizing performance, and building user-friendly digital products.
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-text mb-8">Key Highlights</h3>
            <div className="space-y-4">
              {[
                "Built reusable UI component systems",
                "Optimized API calls using SWR",
                "Migrated architecture to React 18 + Vite",
                "Developed enterprise-grade HR modules",
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-[var(--glass-bg)] p-5 rounded-xl border border-[var(--glass-border)] hover:border-accent/30 hover:bg-[var(--glass-bg)] transition-all duration-300 group"
                >
                  <span className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#61dafb] group-hover:scale-125 transition-transform"></span>
                  <span className="text-text/90 font-medium text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
