
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import firstgen from "../../images/firstgen.webp"
import ftc from "../../images/ftc.webp"

const projects = [
  {
    number: "01",
    title: "FirstGen Digital",
    image: firstgen,
    category: "React Business & Agency Website",
    description:
      "A production-ready digital agency website built with React, featuring responsive service pages, interactive animations, sample project showcases, a multi-step enquiry flow, Supabase lead storage, and Web3Forms integration.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
    ],
    github: "https://github.com/AhamedNasithS/First-Gen-Digital",
    live: "https://first-gen-digital.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    title: "FTC Furniture",
    image: ftc,
    category: "Full-Stack E-Commerce Platform",
    description:
      "A full-stack furniture e-commerce platform with a responsive customer storefront and admin dashboard, including authentication, product management, wishlist, cart, checkout, orders, inventory, reviews, analytics, and role-based admin workflows.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "Node.js",
      "Sequelize",
    ],
    github: "https://github.com/AhamedNasithS/furniture-frontend",
    live: "https://furniture-frontend-xi.vercel.app",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Featured Projects</span>
          </div>
          <div className="flex flex-col justify-between gap-3 md:gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">Selected work built to demonstrate{" "}<span className="text-white/40">how I approach frontend development.</span></h2>
            <p className="max-w-sm text-sm leading-6 text-white/40 lg:text-right">Personal and publicly showcaseable projects. Professional company work is presented separately in Experience and Case Studies.</p>
          </div>
        </motion.div>
        <div className="space-y-3 md:space-y-5">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: index * 0.08 }} className={`group relative overflow-hidden rounded-lg md:rounded-3xl border ${project.featured ? "border-white/20 bg-white/[0.05]" : "border-white/10 bg-white/[0.025]"}`}>
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[200px] md:min-h-[300px] overflow-hidden border-b border-white/10 lg:min-h-[380px] lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
                  <div className="absolute left-1/2 top-1/2 w-[90%] md:w-[75%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div whileHover={{ y: -6, rotateX: 2 }} transition={{ duration: 0.4 }}  className="rounded-xl border border-white/10 bg-white/[0.025] p-2">
                      <div className="mb-2 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/20" />
                        <span className="h-2 w-2 rounded-full bg-white/15" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <div className="ml-3 h-2 flex-1 rounded-full bg-white/[0.05]" />
                      </div>
                      <motion.div className="rounded-[4px] border border-white/10 bg-black/80 shadow-2xl">
                        <img src={project.image} alt={project.title} className="h-full w-full rounded-[4px] object-cover" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <span className="absolute left-2 top-2 md:left-6 md:top-6 text-[10px] md:text-xs tracking-[0.2em] text-white/30">{project.number}</span>
                </div>
                <div className="flex flex-col justify-between p-3 sm:p-9 lg:p-12">
                  <div>
                    <div className="mb-3 md:mb-5 flex items-center gap-2">
                      <Layers3 size={15} className="text-white/40" />
                      <span className="text-xs uppercase tracking-[0.18em] text-white/35">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold md:tracking-tight text-white sm:text-3xl">{project.title}</h3>
                    <p className="mt-2 md:mt-5 max-w-xl text-sm md:leading-7 text-white/45 sm:text-base">{project.description}</p>
                    <div className="mt-3 md:mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-2 md:px-3 py-1 md:py-1.5 text-[10px] md:text-xs text-white/50">{technology}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 md:mt-10 flex flex-wrap items-center gap-5">
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
                      <LuGithub size={16} />
                      Source Code
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/70">
                      Live Project
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300 group-hover:border-white/10" />
            </motion.article>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mt-5 md:mt-10 flex justify-center">
          <a href="https://github.com/AhamedNasithS" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 md:px-5 md:py-3 text-sm text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white">
            <LuGithub size={16} />
            View more on GitHub
            <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
