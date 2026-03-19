import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's build something.
          </h3>
          <p className="text-secondary-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to internships, collaborations, and full-time opportunities in 
            Data Science, Cloud Engineering, and DevOps.
          </p>

          <a
            href="mailto:yuvicardy18@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg transition-all hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] mb-10"
          >
            <Mail className="w-5 h-5" />
            yuvicardy18@gmail.com
          </a>

          <div className="flex justify-center gap-6 mb-16">
            <a href="https://github.com/YuvarajOfl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/yuvaraj8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Yuvaraj T — Built with precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
