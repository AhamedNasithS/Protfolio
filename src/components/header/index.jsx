
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import pdf from "../utils/AhamedNasithS-Resume.pdf"

// Replace this with your actual logo when available:
// import logo from "../assets/logo.svg";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Contact", href: "#contact" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = () => {
        setIsOpen(false);
    };

    return (
        <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.nav animate={{ y: isScrolled ? 10 : 0, backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.82)" : "rgba(10, 10, 10, 0)", borderColor: isScrolled ? "rgba(255, 255, 255, 0.10)" : "rgba(255, 255, 255, 0)" }} transition={{ duration: 0.25 }} className="flex h-16 items-center justify-between rounded-lg md:rounded-2xl border px-3 md:px-4 backdrop-blur-xl sm:px-5">
                    <a href="#home" className="group flex items-center gap-3" aria-label="Ahamed Nasith home">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg md:rounded-xl border border-white/15 bg-white/[0.06] text-sm font-semibold text-white transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.1]">AN</div>
                        <div className="block">
                            <p className="text-sm font-semibold tracking-tight text-white">Ahamed Nasith S</p>
                            <p className="text-[11px] text-white/45">Frontend Developer</p>
                        </div>
                    </a>
                    <div className="hidden items-center gap-1 lg:flex">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.href} className="group relative rounded-lg px-3 py-2 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                                {item.name}
                                <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        <button
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = `${pdf}`; // path relative to public folder
                                link.download = 'Ahamed_Nasith_S_resume.pdf'; // file name for download
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="group inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
                        >
                            Resume
                            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
                        </button>
                    </div>
                    <button type="button" onClick={() => setIsOpen((prev) => !prev)} className="flex h-10 w-10 items-center justify-center rounded-lg md:rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} >{isOpen ? <X size={19} /> : <Menu size={19} />}</button>
                </motion.nav>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 10 }} exit={{ opacity: 0, height: 0, y: -10 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden">
                            <div className="flex flex-col p-3">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.04,
                                            duration: 0.2,
                                        }}
                                        className="rounded-xl px-4 py-3 text-sm text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <button
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = `${pdf}`; // path relative to public folder
                                        link.download = 'Ahamed_Nasith_S_resume.pdf'; // file name for download
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                        handleNavClick()
                                    }}
                                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black"
                                >
                                    Resume
                                    <ArrowUpRight size={15} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;