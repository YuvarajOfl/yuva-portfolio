import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: MapPin, label: "Tamil Nadu, India" },
    { icon: GraduationCap, label: "B.E CSE — CGPA 8.04 (2023–2027)" },
    { icon: Briefcase, label: "AI/ML Intern @ Systech Group" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">About</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Engineer who ships, not just studies.
          </h3>

          <div className="space-y-5 text-secondary-foreground text-lg leading-relaxed mb-10">
            <p>
              I operate at the intersection of <span className="text-foreground font-medium">data science</span>, 
              <span className="text-foreground font-medium"> cloud infrastructure</span>, and 
              <span className="text-foreground font-medium"> DevOps automation</span>. 
              Every project I build follows the same principle: if it can't be deployed, monitored, and scaled — it's not done.
            </p>
            <p>
              From training ML models and building interactive dashboards to containerizing applications 
              with Docker and automating deployments via GitHub Actions — I treat each project as production software, 
              not a classroom exercise.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
              >
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
