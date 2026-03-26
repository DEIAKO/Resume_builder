import { motion } from "framer-motion";
import { personalInfo, skills } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <div className="relative mx-auto lg:mx-0 max-w-md w-full">
            <div className="aspect-square rounded-3xl overflow-hidden relative z-10 border border-white/10 shadow-2xl bg-card">
              <img 
                src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">About Me</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {personalInfo.bio}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg border border-white/5 shadow-sm hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
