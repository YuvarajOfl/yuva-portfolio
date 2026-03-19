import { motion } from "framer-motion";

const categories = [
  {
    title: "Data Science & ML",
    skills: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, IAM, VPC, RDS)", "Docker", "GitHub Actions", "CI/CD", "Linux", "Git"],
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "Tableau", "Excel", "MySQL", "SQLite", "DAX"],
  },
  {
    title: "Programming & Tools",
    skills: ["Python", "C", "HTML/CSS/JS", "Maven", "REST APIs"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Technical arsenal.
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 card-hover"
            >
              <h4 className="text-foreground font-semibold text-lg mb-4">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground font-mono"
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

export default SkillsSection;
