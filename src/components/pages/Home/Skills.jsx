import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Globe2, Layers3, Radio, Server, Zap } from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive, component-driven interfaces and modern web experiences.",
    icon: Code2,
    skills: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    featured: true,
  },
  {
    number: "02",
    title: "State & UI",
    description: "Managing application state and creating interactive, maintainable UI systems.",
    icon: Layers3,
    skills: ["Zustand", "Framer Motion", "Responsive Design", "Reusable Components"],
  },
  {
    number: "03",
    title: "APIs & Application",
    description: "Connecting frontend applications with APIs, authentication, and backend services.",
    icon: Server,
    skills: ["REST APIs", "Node.js", "Authentication", "API Integration"],
  },
  {
    number: "04",
    title: "Real-Time",
    description: "Developing interfaces that work with live application data and communication.",
    icon: Radio,
    skills: ["Socket.IO", "WebSockets", "Real-Time UI", "Live Data"],
  },
  {
    number: "05",
    title: "Integrations",
    description: "Working with external platforms and services as part of production applications.",
    icon: Globe2,
    skills: ["WhatsApp Business", "Meta Business", "Razorpay", "Stripe", "Third-Party APIs"],
  },
  {
    number: "06",
    title: "Development Tools",
    description: "Using modern development and deployment workflows to build and ship applications.",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Vercel", "ApexCharts.js", "SEO"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Technical Expertise</span>
          </div>
          <div className="grid gap-3 md:gap-6 lg:grid-cols-[1fr_380px] lg:items-center">
            <h2 className="max-w-4xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Tools and technologies I use to{" "}<span className="text-white/40">build modern web applications.</span></h2>
            <p className="max-w-lg text-sm leading-6 text-white/40 lg:text-right">A frontend-focused toolkit supported by application development, real-time communication, APIs, integrations, and deployment.</p>
          </div>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.55, delay: index * 0.07 }} whileHover={{ y: -4 }} className={`group rounded-lg md:rounded-2xl border p-3 md:p-6 transition-colors duration-300 ${group.featured ? "border-white/20 bg-white/[0.055]" : "border-white/10 bg-white/[0.025]"}`}>
                <div className="mb-4 md:mb-8 flex items-start justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg md:rounded-xl border ${group.featured ? "border-white/20 bg-white/[0.08]" : "border-white/10 bg-white/[0.04]"}`}>
                    <Icon size={20} strokeWidth={1.5} className="text-white/70"/>
                  </div>
                  <span className="text-xs tracking-widest text-white/25">{group.number}</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-white">{group.title}</h3>
                <p className="mt-1.5 md:mt-3 min-h-[50px] md:min-h-[72px] text-sm leading-6 text-white/40">{group.description}</p>
                <div className="my-3 md:my-6 h-px bg-white/10" />
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-xs text-white/50 transition-colors duration-200 group-hover:border-white/15 group-hover:text-white/70">{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-5 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex items-center gap-4">
            <Zap size={18} className="text-white/50" />
            <div>
              <p className="text-sm font-medium text-white">Frontend First</p>
              <p className="mt-1 text-xs text-white/35">React.js & Next.js</p>
            </div>
          </div>
          <div className="flex items-center md:justify-center gap-4">
            <Server size={18} className="text-white/50" />
            <div>
              <p className="text-sm font-medium text-white">Application Connected</p>
              <p className="mt-1 text-xs text-white/35">APIs & integrations</p>
            </div>
          </div>
          <div className="flex items-center md:justify-end gap-4">
            <Database size={18} className="text-white/50" />
            <div>
              <p className="text-sm font-medium text-white">Production Focused</p>
              <p className="mt-1 text-xs text-white/35">Real-world applications</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;