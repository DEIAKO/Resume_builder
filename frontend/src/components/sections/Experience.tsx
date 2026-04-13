import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card/30 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-center">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-16 mx-auto" />
        </motion.div>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg group overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{job.role}</h3>
                  <p className="text-lg text-primary font-medium">{job.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              
              <ul className="relative z-10 space-y-3 mt-6">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-3 mt-1.5 leading-none">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
