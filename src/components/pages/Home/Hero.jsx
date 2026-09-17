
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import pdf from "../../utils/AhamedNasithS-Resume.pdf";

export default function Hero() {
    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = pdf; // path relative to public folder
        link.download = "Ahamed_Nasith_S_resume.pdf"; // file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="home" className="relative flex md:min-h-screen items-center overflow-hidden pb-5 md:pb-10 pt-20 md:pt-10 lg:pt-14">
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#A3FF12 1px, transparent 1px), linear-gradient(90deg, #A3FF12 1px, transparent 1px)", backgroundSize: "50px 50px" }}/>
                <div className="absolute top-[-200px] left-[20%] size-[500px] rounded-full bg-[#A3FF12]/[0.04] blur-[150px]" />
                <div className="absolute bottom-[-200px] right-[10%] size-[500px] rounded-full bg-[#05AFFF]/[0.05] blur-[150px]" />
            </div>
            <div className="relative z-10 mx-auto md:w-11/12 px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mb-4 sm:mb-8 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1 md:gap-2 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-0.5 md:px-3 md:py-1.5 text-[10px] md:text-xs text-white/55">
                                <span className="relative flex size-1 sm:size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                                    <span className="relative inline-flex size-1 sm:size-2 rounded-full bg-emerald-400" />
                                </span>
                                Open to opportunities
                            </span>
                            <span className="inline-flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs text-white/35">
                                <MapPin className="size-[10px] md:size-[13px]" />
                                Tamil Nadu, India
                            </span>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
                            <p className="mb-2 md:mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/35">Frontend Developer</p>
                            <h1 className="max-w-4xl text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[1.05] sm:leading-[0.92] sm:tracking-[-0.055em] text-white">Building<br /><span className="text-white/35">modern web</span><br />experiences. </h1>
                        </motion.div>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-4 md:mt-8 max-w-2xl text-sm leading-6 md:leading-7 text-white/50 sm:text-lg">I'm Ahamed Nasith S — a frontend developer with 3+ years of experience building responsive SaaS platforms, business applications, dashboards, real-time experiences, and API-driven web applications using{" "}<span className="text-white/80">React.js</span> and{" "}<span className="text-white/80">Next.js</span>.</motion.p>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="mt-5 md:mt-9 flex flex-wrap items-center gap-3">
                            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90">
                                View Projects
                                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                            <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white" onClick={() => { handleResumeDownload() }}> Download Resume</button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }} className="mt-10 flex items-center gap-5">
                            <a href="https://github.com/AhamedNasithS" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/35 transition-colors duration-200 hover:text-white"><LuGithub size={19} /></a>
                            <a href="https://www.linkedin.com/in/ahamed-nasith-7390a7246/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/35 transition-colors duration-200 hover:text-white" ><LuLinkedin size={19} /></a>
                            <span className="h-px w-10 bg-white/10" />
                            <span className="text-xs text-white/25"> React · Next.js · JavaScript</span>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, scale: 0.94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="relative hidden lg:block">
                        <div className="relative mx-auto aspect-square max-w-[440px]">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-[#5D5D5D]" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear", }} className="absolute inset-[12%] rounded-full border border-dashed border-[#5D5D5D]" />
                            <div className="absolute inset-[23%] flex flex-col items-center justify-center rounded-full border border-[#5D5D5D] bg-white/[0.025] backdrop-blur-sm">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl font-semibold text-white">AN</div>
                                <p className="text-sm font-medium text-white">Ahamed Nasith S</p>
                                <p className="mt-1 text-xs text-white/35">Frontend Developer</p>
                            </div>
                            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-[16%] rounded-xl border border-white/10 bg-[#0b0b0b]/90 px-4 py-2.5 backdrop-blur-xl">
                                <span className="text-xs font-medium text-white/65">React.js</span>
                            </motion.div>
                            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[17%] left-0 rounded-xl border border-white/10 bg-[#0b0b0b]/90 px-4 py-2.5 backdrop-blur-xl">
                                <span className="text-xs font-medium text-white/65">Next.js</span>
                            </motion.div>
                            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[5%] right-[14%] rounded-xl border border-white/10 bg-[#0b0b0b]/90 px-4 py-2.5 backdrop-blur-xl">
                                <span className="text-xs font-medium text-white/65">REST APIs</span>
                            </motion.div>
                            <div className="absolute left-[17%] top-[31%] h-2 w-2 rounded-full bg-white/30" />
                            <div className="absolute right-[18%] bottom-[36%] h-1.5 w-1.5 rounded-full bg-white/20" />
                            <div className="absolute left-[39%] bottom-[8%] h-1.5 w-1.5 rounded-full bg-white/20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};