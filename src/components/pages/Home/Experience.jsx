import { motion } from "framer-motion";
import { ArrowUpRight, Building2, CalendarDays, Check } from "lucide-react";

const Experience = () => {
  const contributions = [
    "Built and maintained responsive interfaces for production SaaS and business applications.",
    "Developed dashboards, CRM workflows, forms, reports, and operational interfaces using React.js and Next.js.",
    "Implemented real-time application experiences using Socket.IO and WebSockets.",
    "Integrated frontend applications with REST APIs, authentication systems, and third-party services.",
    "Worked with WhatsApp Business integrations, payment systems, OAuth, and other external APIs.",
    "Developed data-driven interfaces and reports using charting libraries such as ApexCharts.",
    "Worked on responsive web experiences with attention to usability, performance, and maintainability.",
  ];

  const technologies = ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "REST APIs", "Socket.IO", "WebSockets", "Node.js", "Framer Motion" ];

  return (
    <section id="experience" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Experience</span>
          </div>
          <div className="flex flex-col justify-between gap-3 md:gap-6 lg:flex-row lg:items-center">
            <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Building and improving{" "}<span className="text-white/40">production web applications.</span></h2>
            <p className="max-w-sm text-sm leading-6 text-white/40 lg:text-right">3+ years of professional experience focused primarily on frontend development and modern web applications.</p>
          </div>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-white/10 md:block" />
          <motion.article initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7 }} className="relative md:pl-14">
            <div className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black md:flex">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
            <div className="rounded-lg md:rounded-3xl border border-white/10 bg-white/[0.025] p-3 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-4 md:gap-8 lg:flex-row">
                <div className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Building2 size={23} strokeWidth={1.5} className="text-white/70" />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/35">Professional Experience</p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">Frontend Developer</h3>
                    <p className="mt-2 text-base text-white/50">Pepul Tech Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-white/40">
                  <CalendarDays size={16} className="mt-0.5" />
                  <span>June 2023 — Present</span>
                </div>
              </div>
              <div className="my-4 md:my-8 h-px bg-white/10" />
              <div className="max-w-4xl">
                <p className="text-base leading-8 text-white/60 sm:text-lg">Working on production web applications and business platforms, with a primary focus on frontend development, responsive interfaces, application workflows, dashboards, real-time features, API integrations, and user-facing product experiences.</p>
              </div>
              <div className="mt-5 md:mt-10">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/35">Selected Contributions</p>
                <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">
                  {contributions.map((item, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="flex gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                        <Check size={11} className="text-white/60" />
                      </div>
                      <p className="text-sm leading-6 text-white/50">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-5 md:mt-10">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-white/35">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 transition-colors duration-200 hover:border-white/20 hover:text-white/70">{technology}</span>
                  ))}
                </div>
              </div>
              <div className="mt-5 md:mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
                <p className="text-xs text-white/30">Production experience across SaaS & business applications</p>
                <motion.a href="#case-studies" whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-flex items-center gap-2 text-sm font-medium text-white">
                  View case studies
                  <ArrowUpRight size={16} />
                </motion.a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Experience;