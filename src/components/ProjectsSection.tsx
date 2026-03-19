import { motion } from "framer-motion";
import { ExternalLink, Github, Container } from "lucide-react";

const projects = [
  {
    tag: "Data Science + NLP",
    title: "AI News Assistant",
    problem: "Information overload — professionals need fast, digestible news summaries without reading 20 articles daily.",
    approach: [
      "Built an end-to-end data pipeline: fetch real-time news via APIs → preprocess and extract key entities → generate concise summaries using NLP abstractions",
      "Designed an interactive Streamlit dashboard as a deployable data product, with category filters, sentiment indicators, and visual analytics",
      "Implemented real-time data refresh for continuous up-to-date intelligence delivery",
    ],
    stack: ["Python", "Streamlit", "NLP APIs", "Pandas", "Matplotlib"],
    impact: "Reduces news consumption time by ~70%. Deployed live — used as a working demo of production data product thinking.",
    standout: "Not a Jupyter notebook — a deployed, user-facing application with a real data pipeline.",
    github: "https://github.com/YuvarajOfl/ai-news-assistant",
    live: "https://ai-news-assistant.streamlit.app/",
  },
  {
    tag: "Cloud + DevOps",
    title: "AI News Assistant — CI/CD Pipeline",
    problem: "Most student projects lack deployment infrastructure. This project proves production-grade DevOps capability.",
    approach: [
      "Designed a multi-stage Docker build to minimize image size — separate build and runtime layers for security and efficiency",
      "Built a GitHub Actions CI/CD workflow: lint → test → build Docker image → push to DockerHub — triggered on every push to main",
      "Implemented image versioning using Git SHA tags for full traceability and rollback capability",
      "Managed secrets via GitHub Secrets — zero hardcoded credentials, following industry security best practices",
    ],
    stack: ["Docker", "GitHub Actions", "DockerHub", "YAML", "Shell"],
    impact: "Mirrors real-world enterprise CI/CD — any interviewer can inspect the pipeline and see industry-standard workflow design.",
    standout: "Production-grade simulation. Secrets management, image versioning, multi-stage builds — this isn't tutorial-following.",
    github: "https://github.com/YuvarajOfl/ai-news-assistant-cicd",
    dockerhub: "https://hub.docker.com/r/yuvarajofl/ai-news-assistant",
  },
  {
    tag: "Data Analytics",
    title: "Sales Data Analysis Dashboard",
    problem: "Businesses lose revenue when sales data sits in raw spreadsheets. Decision-makers need visual, actionable insights.",
    approach: [
      "Performed end-to-end data cleaning and exploratory analysis — handled missing values, outliers, and inconsistent formats",
      "Built an interactive Power BI dashboard with drill-down capabilities: revenue by region, top products, monthly trends",
      "Created custom DAX measures for KPIs: growth rate, average order value, customer segmentation metrics",
    ],
    stack: ["Power BI", "DAX", "Excel", "Python (Pandas)"],
    impact: "Translates raw sales data into board-ready visual insights. Demonstrates business acumen alongside technical skill.",
    standout: "Dashboard storytelling — not just charts, but a narrative that drives decisions.",
    github: "https://github.com/YuvarajOfl/sales-data-analysis-powerbi",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary tracking-wider uppercase mb-4">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built to deploy, not to demo.
          </h3>
          <p className="text-secondary-foreground text-lg mb-12 max-w-2xl">
            Each project follows production thinking: real problem → engineered solution → deployed result.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 md:p-8 card-hover"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.tag}
                </span>
                <div className="flex items-center gap-2 ml-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(project as any).dockerhub && (
                    <a href={(project as any).dockerhub} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" title="DockerHub">
                      <Container className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h4>
              
              <div className="mb-4">
                <p className="text-sm font-mono text-primary mb-1">Problem</p>
                <p className="text-secondary-foreground">{project.problem}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-mono text-primary mb-2">Solution Architecture</p>
                <ul className="space-y-2">
                  {project.approach.map((step, j) => (
                    <li key={j} className="flex gap-3 text-secondary-foreground text-sm leading-relaxed">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-mono text-primary mb-1">Impact</p>
                  <p className="text-secondary-foreground text-sm">{project.impact}</p>
                </div>
                <div>
                  <p className="text-sm font-mono text-primary mb-1">What Stands Out</p>
                  <p className="text-secondary-foreground text-sm">{project.standout}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
