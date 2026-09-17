import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-14">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Education</span>
          </div>
          <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Academic foundation for{" "}<span className="text-white/40">a career in technology.</span></h2>
        </motion.div>
        <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-lg md:rounded-3xl border border-white/10 bg-white/[0.025] p-3 sm:p-8 lg:p-10">
          <div className="grid gap-5 md:gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="flex gap-3 md:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.04]">
                  <GraduationCap size={24} strokeWidth={1.5} className="text-white/65"/>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/30">Bachelor's Degree</p>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-3xl">B.Sc. Computer Science</h3>
                  <p className="mt-2 text-base text-white/45">Jamal Mohamed College, Tiruchirappalli</p>
                </div>
              </div>
              <div className="mt-4 md:mt-8 h-px bg-white/10" />
              <div className="mt-3 md:mt-7 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/25">Graduated</p>
                  <p className="mt-2 text-sm text-white/55">April 2023</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/25">CGPA</p>
                  <p className="mt-2 text-sm font-medium text-white/70">8.88</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg md:rounded-2xl border border-white/[0.07] bg-white/[0.02] p-3 md:p-6">
              <div>
                <div className="mb-3 md:mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <BookOpen size={18} strokeWidth={1.5} className="text-white/55"/>
                </div>
                <h4 className="text-lg font-medium text-white">Computer Science Foundation</h4>
                <p className="mt-3 text-sm leading-6 text-white/40">Academic foundation in computer science supporting my professional work in software development and modern web technologies.</p>
              </div>
              <div className="mt-4 md:mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <Award size={16} className="text-white/40" />
                <span className="text-xs text-white/35">CGPA 8.88 / 10</span>
              </div>
            </div>
          </div>
        </motion.article>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-4 md:mt-8 flex justify-end">
          <a href="#contact"className="group inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white">
            Let's connect
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1"/>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;