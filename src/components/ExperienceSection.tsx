import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI & Data Science Intern",
    company: "Systech Group",
    period: "2025 – Present",
    bullets: [
      "Engineered ML workflows: data preprocessing, feature engineering, and model training for classification and prediction tasks",
      "Built analytical dashboards in Power BI and Excel to surface insights for stakeholders",
      "Optimized models for deployment readiness — focusing on latency, accuracy trade-offs, and reproducibility",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Prodesk IT",
    period: "2025",
    bullets: [
      "Developed responsive, accessible UI components using HTML, CSS, and JavaScript",
      "Shipped portfolio pages and landing sites with performance-optimized assets",
      "Participated in code reviews and iterative UI/UX improvement cycles",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Where I've contributed.
          </h3>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6 border-l-2 border-border"
            >
              <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h4 className="text-foreground font-semibold text-lg">{exp.role}</h4>
                <span className="text-primary font-mono text-sm">@ {exp.company}</span>
                <span className="text-muted-foreground text-sm ml-auto">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-secondary-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
