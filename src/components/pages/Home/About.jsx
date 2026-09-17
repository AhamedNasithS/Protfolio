import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black mx-auto py-5 sm:py-10 lg:py-20">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
              <div className="mb-2.5 md:mb-5 flex items-center gap-3">
                <span className="h-px w-4 md:w-8 bg-white/40" />
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">About</span>
              </div>
              <h2 className="max-w-4xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Building interfaces that are{" "}<span className="text-white/40">practical, scalable, and built for real users.</span></h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }}>
              <div className="space-y-2 md:space-y-6 text-sm leading-6 md:leading-8 text-white/60 sm:text-lg">
                <p>I'm Ahamed Nasith S, a frontend developer with 3+ years of professional experience building modern web applications.</p>
                <p>My primary focus is React.js and Next.js, where I work on responsive interfaces, business applications, dashboards, real-time experiences, and API-driven products.</p>
                <p>I've worked across different parts of the web application stack, connecting frontend interfaces with REST APIs, authentication systems, real-time communication, payments, and third-party integrations.</p>
                <p>I enjoy turning complex product requirements into interfaces that are clear, responsive, maintainable, and easy for users to work with.</p>
              </div>
              <motion.a href="#experience" whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="mt-4 md:mt-10 inline-flex items-center gap-2 text-sm font-medium text-white">
                Explore my experience
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-4">
            <div className="group rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025] p-3 md:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-3 md:mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Code2 size={19} className="text-white/70" />
                </div>
                <span className="text-xs text-white/25">01</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">Frontend Engineering</h3>
              <p className="text-sm leading-6 text-white/45">React.js, Next.js, JavaScript, Tailwind CSS, state management, responsive UI, and reusable component development.</p>
            </div>
            <div className="group rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025] p-3 md:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-3 md:mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Layers3 size={19} className="text-white/70" />
                </div>
                <span className="text-xs text-white/25">02</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">Product-Focused Development</h3>
              <p className="text-sm leading-6 text-white/45">Experience building SaaS and business applications involving dashboards, CRM workflows, forms, reports, authentication, and operational tools.</p>
            </div>
            <div className="group rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025] p-3 md:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-3 md:mb-5 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Zap size={19} className="text-white/70" />
                </div>
                <span className="text-xs text-white/25">03</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">Integration & Real-Time Features</h3>
              <p className="text-sm leading-6 text-white/45">Working with REST APIs, Socket.IO, WebSockets, OAuth, WhatsApp Business integrations, payment systems, and third-party services.</p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-10 md:mt-20 h-px origin-left bg-white/10"/>
      </div>
    </section>
  );
};