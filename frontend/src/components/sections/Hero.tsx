import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30" 
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVars} className="mb-4">
            <span className="inline-block py-1.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide">
              Available for new opportunities
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-6">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
            <br />
            <span className="text-foreground/90">{personalInfo.title}</span>
          </motion.h1>
          
          <motion.p variants={itemVars} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {personalInfo.tagline}
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="group flex w-full sm:w-auto items-center justify-center px-8 py-4 text-base font-bold rounded-xl bg-primary text-primary-foreground transition-all duration-300 hover:bg-primary/90 shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] hover:-translate-y-1 active:translate-y-0"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-4">
              {personalInfo.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target={social.platform !== "Email" ? "_blank" : undefined}
                    rel={social.platform !== "Email" ? "noopener noreferrer" : undefined}
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.platform}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
