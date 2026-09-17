import { motion } from "framer-motion";
import { BarChart3, MessageSquare, PlugZap, Workflow } from "lucide-react";

const caseStudies = [
  {
    number: "01",
    type: "Real-Time Application",
    title: "Designing responsive real-time experiences",
    icon: MessageSquare,
    context: "Worked on production application experiences where users needed information and interactions to update in real time.",
    contribution: "Developed frontend interfaces and connected them with real-time communication mechanisms while keeping the experience responsive and easy to use.",
    approach: ["Built responsive React-based interfaces", "Worked with Socket.IO and WebSockets", "Handled changing application state and live updates", "Connected frontend interactions with backend APIs"],
    technologies: ["React.js", "JavaScript", "Socket.IO", "WebSockets", "REST APIs"],
  },
  {
    number: "02",
    type: "Business Application",
    title: "Turning complex workflows into usable interfaces",
    icon: Workflow,
    context: "Worked on business applications containing multiple workflows, forms, dashboards, operational screens, and role-based interactions.",
    contribution: "Translated product requirements into reusable frontend interfaces designed to make business workflows clearer and easier to operate.",
    approach: ["Created reusable React components", "Developed responsive forms and workflows", "Integrated interfaces with REST APIs", "Implemented application state management", "Focused on usability across different screen sizes"],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Zustand", "REST APIs"],
  },
  {
    number: "03",
    type: "Dashboard & Data",
    title: "Building interfaces around operational data",
    icon: BarChart3,
    context: "Worked on dashboards and reporting interfaces where users needed to understand application and business data through structured views.",
    contribution: "Developed frontend dashboard experiences and data visualizations that connected application data with clear, usable interfaces.",
    approach: ["Built dashboard layouts and reusable UI sections", "Integrated data from APIs", "Created charts and visual reports", "Worked with ApexCharts.js", "Handled responsive dashboard layouts"],
    technologies: ["React.js", "Next.js", "ApexCharts.js", "REST APIs", "Tailwind CSS"],
  },
  {
    number: "04",
    type: "Third-Party Integrations",
    title: "Connecting web applications with external services",
    icon: PlugZap,
    context: "Worked on application features requiring communication with external platforms and services.",
    contribution: "Built frontend flows around external integrations while connecting application interfaces with APIs and authentication mechanisms.",
    approach: ["Integrated frontend flows with external APIs", "Worked with WhatsApp Business capabilities", "Implemented authentication-related interfaces", "Worked with Google OAuth", "Integrated payment flows using Razorpay and Stripe"],
    technologies: ["React.js", "Next.js", "REST APIs", "Google OAuth", "WhatsApp Business", "Razorpay", "Stripe"],
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Professional Case Studies</span>
          </div>
          <div className="grid gap-3 md:gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
            <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Real application problems,{" "}<span className="text-white/40">practical engineering decisions.</span></h2>
            <p className="max-w-md text-sm leading-6 text-white/40 lg:text-right">Selected professional experiences presented at a high level to respect company confidentiality and internal product details.</p>
          </div>
        </motion.div>
        <div className="space-y-3 md:space-y-5">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.article key={study.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.12 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="group rounded-lg md:rounded-3xl border border-white/10 bg-white/[0.025] p-3 md:p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:p-8 lg:p-10">
                <div className="flex flex-col gap-3 md:gap-7 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-3 md:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg md:rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon size={20} strokeWidth={1.5} className="text-white/60"/>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="text-xs tracking-[0.2em] text-white/25">{study.number}</span>
                        <span className="h-px w-5 bg-white/10" />
                        <span className="text-xs uppercase tracking-[0.16em] text-white/35">{study.type}</span>
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{study.title}</h3>
                    </div>
                  </div>
                  <span className="hidden text-xs uppercase tracking-[0.18em] text-white/20 lg:block">Professional Work</span>
                </div>
                <div className="my-4 md:my-8 h-px bg-white/10" />
                <div className="grid gap-5 md:gap-10 lg:grid-cols-2">
                  <div>
                    <p className="mb-1 md:mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/30">Context</p>
                    <p className="text-sm leading-7 text-white/50 sm:text-base">{study.context}</p>
                  </div>
                  <div>
                    <p className="mb-1 md:mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/30">Contribution</p>
                    <p className="text-sm leading-7 text-white/50 sm:text-base">{study.contribution}</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-10">
                  <p className="mb-3 md:mb-5 text-xs font-medium uppercase tracking-[0.18em] text-white/30">Technical Approach</p>
                  <div className="grid gap-1.5 md:gap-3 sm:grid-cols-2">
                    {study.approach.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-2 md:p-4">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                        <p className="text-sm leading-6 text-white/50">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 md:mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/25">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/45">{technology}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mt-4 md:mt-8 rounded-lg md:rounded-2xl border border-white/[0.07] bg-white/[0.015] px-3 py-2 md:px-6 md:py-5">
          <p className="text-center text-xs leading-6 text-white/30">Professional case studies are intentionally presented without private source code, internal screenshots, customer information, proprietary metrics, or confidential product details.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;