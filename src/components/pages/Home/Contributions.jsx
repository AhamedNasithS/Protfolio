import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, CheckCircle2, LayoutDashboard, MapPin, MessageCircle, PanelsTopLeft, Store, Users } from "lucide-react";

const contributions = [
  {
    number: "01",
    title: "Surge Module",
    description: "Contributed to a community-oriented product module with features around posts, engagement, maintenance events, marketplace experiences, and Winner Wall.",
    icon: Users,
    tags: ["Community", "Marketplace", "Posts", "Engagement"],
  },
  {
    number: "02",
    title: "Admin Dashboard",
    description: "Developed interfaces for administrative workflows, operational controls, data views, and application management.",
    icon: LayoutDashboard,
    tags: ["Dashboard", "Admin UI", "Workflows"],
  },
  {
    number: "03",
    title: "Real-Time Communication",
    description: "Worked on user-facing communication experiences involving live updates and real-time application interactions.",
    icon: MessageCircle,
    tags: ["Socket.IO", "WebSockets", "Real-Time"],
  },
  {
    number: "04",
    title: "Business Workflows",
    description: "Built frontend experiences for forms, CRM workflows, ticketing, check-in/check-out, task-related interfaces, and operational processes.",
    icon: PanelsTopLeft,
    tags: ["CRM", "Forms", "Helpdesk", "Tasks"],
  },
  {
    number: "05",
    title: "Data & Reporting",
    description: "Worked on dashboards, reports, leaderboards, and data visualization interfaces for business applications.",
    icon: BarChart3,
    tags: ["Reports", "Leaderboards", "ApexCharts"],
  },
  {
    number: "06",
    title: "Location-Based Workflows",
    description: "Contributed to check-in/check-out experiences involving live location and task-related application flows.",
    icon: MapPin,
    tags: ["Live Location", "Check-in", "Tasks"],
  },
  {
    number: "07",
    title: "Messaging Integrations",
    description: "Worked on WhatsApp Business-related application flows including template management and message-sending experiences.",
    icon: MessageCircle,
    tags: ["WhatsApp Business", "Meta", "Templates"],
  },
  {
    number: "08",
    title: "Responsive Web Products",
    description: "Built and maintained responsive web experiences across business websites and application interfaces.",
    icon: Store,
    tags: ["Responsive UI", "Web Development", "SEO"],
  },
];

const Contributions = () => {
  return (
    <section id="contributions" className="relative overflow-hidden bg-black py-5 sm:py-10">
      <div className="relative mx-auto md:w-11/12 px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-4 md:mb-16">
          <div className="mb-2.5 md:mb-5 flex items-center gap-3">
            <span className="h-px w-4 md:w-8 bg-white/40" />
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.25em] text-white/50">Selected Contributions</span>
          </div>
          <div className="grid gap-3 md:gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
            <h2 className="max-w-3xl text-2xl font-semibold md:leading-tight md:tracking-tight text-white sm:text-4xl lg:text-5xl">More than individual features,{" "}<span className="text-white/40">experience across real product workflows.</span></h2>
            <p className="max-w-md text-sm leading-6 text-white/40 lg:text-right">A snapshot of the product areas and application experiences I've contributed to throughout my professional work.</p>
          </div>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contributions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.number} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -5 }} className="group flex min-h-[250px] md:min-h-[300px] flex-col rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025] p-3 md:p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg md:rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon size={19} strokeWidth={1.5} className="text-white/60"/>
                  </div>
                  <span className="text-xs tracking-[0.2em] text-white/20">{item.number}</span>
                </div>
                <div className="mt-3 md:mt-7 flex-1">
                  <h3 className="text-lg font-medium tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1.5 md:mt-3 text-sm leading-6 text-white/40">{item.description}</p>
                </div>
                <div className="mt-3 md:mt-7 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-1 text-[11px] text-white/35">{tag}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-4 md:mt-8 rounded-lg md:rounded-2xl border border-white/10 bg-white/[0.025] p-3 sm:p-8">
          <div className="flex flex-col gap-3 md:gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <CheckCircle2 size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-white/50"/>
              <div>
                <p className="text-sm font-medium text-white">Frontend contribution across the product lifecycle</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">From interface development and API integration to real-time features, dashboards, workflows, and responsive product experiences.</p>
              </div>
            </div>
            <motion.a href="#experience" whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-flex shrink-0 items-center gap-2 text-xs md:text-sm font-medium text-white/60 transition-colors hover:text-white">
              Back to experience
              <ArrowUpRight className="transition-transform group-hover:rotate-45 size-[14px] md:size-[16px]" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;