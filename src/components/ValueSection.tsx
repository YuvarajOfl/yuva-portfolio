import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, BookOpen } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Production-First Mindset",
    desc: "Every project gets containerized, versioned, and deployed. If it can't run in production, it's incomplete.",
  },
  {
    icon: Target,
    title: "End-to-End Ownership",
    desc: "From data cleaning and model training to Docker builds and CI/CD — I own the full lifecycle.",
  },
  {
    icon: TrendingUp,
    title: "Business-Aware Engineering",
    desc: "I build dashboards and models that answer business questions, not just score metrics.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Currently deepening expertise in Kubernetes orchestration, Terraform IaC, and MLOps pipelines.",
  },
];

const futureGoals = [
  "Master Kubernetes for container orchestration at scale",
  "Build end-to-end MLOps pipelines with model monitoring",
  "Contribute to open-source DevOps and data tooling",
  "Pursue AWS Solutions Architect certification",
];

const ValueSection = () => {
  return (
    <section id="value" className="py-24 relative">
      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">What I Bring</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            More than code — engineering judgment.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <v.icon className="w-5 h-5 text-primary mb-3" />
              <h4 className="text-foreground font-semibold mb-2">{v.title}</h4>
              <p className="text-secondary-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <h4 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Where I'm Headed</h4>
          <ul className="space-y-3">
            {futureGoals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-secondary-foreground">
                <span className="text-primary mt-0.5">→</span>
                {goal}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueSection;
