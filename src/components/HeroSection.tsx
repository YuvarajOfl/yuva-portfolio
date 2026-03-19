import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 glow-top pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(160,70%,50%) 1px, transparent 1px), linear-gradient(90deg, hsl(160,70%,50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-mono text-primary tracking-wider uppercase">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-foreground">Data Science &</span>
            <br />
            <span className="text-gradient">Cloud DevOps</span>
            <br />
            <span className="text-foreground">Engineer</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mb-8 leading-relaxed">
            Building scalable, data-driven systems with production-grade ML pipelines, 
            cloud infrastructure, and automated CI/CD workflows. 
            Turning raw data into deployed, decision-driving products.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[var(--shadow-glow)] hover:scale-[1.02]"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="mailto:yuvicardy18@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: Github, href: "https://github.com/YuvarajOfl", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/yuvaraj8", label: "LinkedIn" },
              { icon: Mail, href: "mailto:yuvicardy18@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
