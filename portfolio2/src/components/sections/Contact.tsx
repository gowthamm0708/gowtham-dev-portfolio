import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: ""
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    // Replace these with your actual EmailJS service, template, and public key
    const serviceId = "YOUR_SERVICE_ID"; 
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    if (serviceId === "YOUR_SERVICE_ID") {
        setLoading(false);
        setStatus({
            type: "error",
            message: "EmailJS not configured. Please add your credentials in Contact.tsx"
        });
        // For demo purposes, simulate success
        setTimeout(() => {
            setLoading(false);
            setStatus({
                type: "success",
                message: "Message sent successfully! (Demo Mode)"
            });
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
        return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          to_name: "Gowtham Murugasamy",
          from_email: formData.email,
          to_email: "gowthamm0708@gmail.com",
          message: formData.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatus({ type: "success", message: "Thank you. I will get back to you as soon as possible." });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus({ type: "error", message: "Something went wrong. Please try again." });
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold font-display text-text mb-6">Let's Connect</h3>
            <p className="text-text/80 text-lg mb-8 leading-relaxed font-light">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <a href="mailto:gowthamm0708@gmail.com" className="flex items-center gap-4 text-text/80 hover:text-accent transition-colors group">
                <div className="w-14 h-14 bg-[var(--glass-bg)] rounded-full flex items-center justify-center group-hover:bg-accent/10 border border-[var(--glass-border)] group-hover:border-accent/30 transition-all">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <span className="block text-sm text-text/60">Email Me</span>
                  <span className="text-lg font-medium">gowthamm0708@gmail.com</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/gowthamm07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text/80 hover:text-accent transition-colors group">
                <div className="w-14 h-14 bg-[var(--glass-bg)] rounded-full flex items-center justify-center group-hover:bg-accent/10 border border-[var(--glass-border)] group-hover:border-accent/30 transition-all">
                  <Linkedin className="text-accent" size={24} />
                </div>
                <div>
                  <span className="block text-sm text-text/60">LinkedIn</span>
                  <span className="text-lg font-medium">linkedin.com/in/gowthamm07</span>
                </div>
              </a>
              <a href="https://github.com/gowthamm0708" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text/80 hover:text-accent transition-colors group">
                <div className="w-14 h-14 bg-[var(--glass-bg)] rounded-full flex items-center justify-center group-hover:bg-accent/10 border border-[var(--glass-border)] group-hover:border-accent/30 transition-all">
                  <Github className="text-accent" size={24} />
                </div>
                <div>
                  <span className="block text-sm text-text/60">GitHub</span>
                  <span className="text-lg font-medium">github.com/gowthamm0708</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl border border-[var(--glass-border)] space-y-6 shadow-2xl">
              <div>
                <label htmlFor="name" className="block text-text/80 text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text/80 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-white hover:text-primary hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(97,218,251,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" size={18} /> : <>Send Message <Send size={18} /></>}
              </button>

              {status.message && (
                <div className={`mt-4 p-4 rounded-lg text-sm ${status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
