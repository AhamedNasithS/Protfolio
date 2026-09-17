import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="relative mx-auto md:w-11/12 px-4 py-5 sm:px-8 sm:y-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <motion.a href="#home" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
              <span className="text-xs font-semibold tracking-tight text-white">AN</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Ahamed Nasith S</p>
              <p className="mt-0.5 text-xs text-white/30">Frontend Developer</p>
            </div>
          </motion.a>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-2">
            <a href="https://github.com/AhamedNasithS" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
              <LuGithub className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/ahamed-nasith-7390a7246/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
              <LuLinkedin className="h-4 w-4" />
            </a>
            <button type="button" onClick={scrollToTop} aria-label="Back to top" className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
              <ArrowUp className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
        <div className="my-4 md:my-8 h-px bg-white/10" />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col gap-3 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Ahamed Nasith S. All rights reserved.</p>
          <p>React.js · Next.js · JavaScript</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;