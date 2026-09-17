import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Download } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import pdf from "../../utils/AhamedNasithS-Resume.pdf";

const Contact = () => {
  const email = "sahamednasith2003@gmail.com";

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = pdf; // path relative to public folder
    link.download = "Ahamed_Nasith_S_resume.pdf"; // file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sahamednasith2003@gmail.com');
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/50" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Contact</span>
          </div>
          <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Let's build something <span className="text-white/40"> meaningful.</span></h2>
          <p className="mt-3 md:mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-lg">I'm open to frontend development opportunities where I can contribute to meaningful products, solve practical problems, and continue growing as an engineer.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.1 }} className="relative overflow-hidden rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025]">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
            <div className="border-b border-white/10 p-5 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg md:rounded-xl border border-white/10 bg-white/[0.04]">
                <Mail className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="text-xl font-medium text-white sm:text-3xl">Have an opportunity in mind?</h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">Whether you're hiring for a frontend role, working on a web product, or simply want to connect, I'd be happy to hear from you.</p>
              <div className="group mt-4 md:mt-8 inline-flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-white/70 cursor-pointer" onClick={() => handleEmailClick() }>
                <span>{email}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
            <div className="p-5 sm:p-10 lg:p-14">
              <p className="mb-3 md:mb-6 text-xs font-medium uppercase tracking-[0.2em] text-white/35">Connect</p>
              <div className="space-y-3">
                <a href="https://github.com/AhamedNasithS" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-lg md:rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-4">
                    <LuGithub className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-sm font-medium text-white">GitHub</p>
                      <p className="mt-1 text-xs text-white/35">View my code & projects</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                </a>
                <a href="https://www.linkedin.com/in/ahamed-nasith-7390a7246/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-lg md:rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                  <div className="flex items-center gap-4">
                    <LuLinkedin className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-sm font-medium text-white">LinkedIn</p>
                      <p className="mt-1 text-xs text-white/35">Connect professionally</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                </a>
                <button onClick={handleResumeDownload} className="group flex items-center justify-between rounded-lg md:rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] w-full text-start">
                  <div className="flex items-center gap-4">
                    <Download className="h-5 w-5 text-white/60" />
                    <div>
                      <p className="text-sm font-medium text-white">Resume</p>
                      <p className="mt-1 text-xs text-white/35">View my professional profile</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/70" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              <span className="text-xs text-white/40">Available for new opportunities</span>
            </div>
            <span className="text-xs text-white/25">React.js · Next.js · Frontend Development</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 md:mt-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">Thanks for visiting</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;