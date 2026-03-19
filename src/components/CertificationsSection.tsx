import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "Data Science for Engineers", issuer: "NPTEL", date: "Sept 2025" },
  { title: "GenAI Powered Data Analytics", issuer: "Forage", date: "Aug 2025" },
  { title: "Artificial Intelligence", issuer: "NoviTech", date: "May 2025" },
  { title: "Cloud Computing Fundamentals", issuer: "IBM SkillsBuild", date: "Feb 2026" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Certifications</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Validated expertise.
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 card-hover flex items-start gap-4"
            >
              <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
