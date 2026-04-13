import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 border-t border-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-10 py-5 text-lg font-bold rounded-2xl bg-white text-background hover:bg-white/90 transition-all shadow-xl hover:shadow-white/20 hover:-translate-y-1"
          >
            <Mail className="mr-3 h-6 w-6" />
            Say Hello
          </a>

          <div className="mt-20 flex items-center justify-center gap-6">
            {personalInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target={social.platform !== "Email" ? "_blank" : undefined}
                  rel={social.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-4 rounded-full bg-card border border-white/10 text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
