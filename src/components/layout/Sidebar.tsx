import {
    Code2,
    Home,
    User,
    Folder,
    Layers,
    Trophy,
    Mail,
    Download,
    Menu,
    X,
    Map,
    GitBranch,
} from "lucide-react";

import { useEffect, useState } from "react";

const navigation = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Skills", icon: Layers, href: "#skills" },
    { name: "Projects", icon: Folder, href: "#projects" },
    { name: "LeetCode", icon: Trophy, href: "#leetcode" },
    { name: "Journey", icon: Map, href: "#journey" },
    { name: "Contact", icon: Mail, href: "#contact" },
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const sections = navigation
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(
                        visibleSections[0].target.id
                    );
                }
            },
            {
                threshold: [0.2, 0.4, 0.6],
                rootMargin: "-10% 0px -45% 0px",
            }
        );

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Mobile Header */}
            <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-slate-800 bg-[#0b1120]/95 px-5 backdrop-blur lg:hidden">

                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <Code2 className="h-7 w-7 text-blue-400" />

                    <span className="text-sm font-semibold text-white">
                        Ankur Kumar
                    </span>
                </a>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

            </header>

            {/* Mobile Overlay */}
            {isOpen && (
                <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={closeMenu}
                    className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed left-0 top-0 z-50
                    flex h-screen w-[260px]
                    flex-col
                    border-r border-slate-800
                    bg-[#0b1120]
                    px-7 py-8
                    transition-transform duration-300
                    lg:translate-x-0
                    ${
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                }
                `}
            >

                {/* Profile */}
                <div>
                    <a
                        href="#home"
                        onClick={closeMenu}
                    >
                        <Code2 className="h-9 w-9 text-blue-400" />

                        <h1 className="mt-6 text-xl font-semibold tracking-tight text-white">
                            Ankur Kumar
                        </h1>

                        <p className="mt-1 text-sm text-slate-400">
                            Java Backend Developer
                        </p>
                    </a>
                </div>

                {/* Navigation */}
                <nav className="mt-10 space-y-1.5">

                    {navigation.map((item) => {
                        const Icon = item.icon;

                        const sectionId =
                            item.href.replace("#", "");

                        const isActive =
                            activeSection === sectionId;

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={closeMenu}
                                className={`
                                    group flex items-center gap-4
                                    rounded-lg
                                    border-l-2
                                    px-4 py-3
                                    text-sm
                                    transition-all
                                    ${
                                    isActive
                                        ? "border-blue-500 bg-blue-500/10 text-blue-300"
                                        : "border-transparent text-slate-400 hover:border-blue-500/50 hover:bg-slate-800/50 hover:text-slate-100"
                                }
                                `}
                            >
                                <Icon
                                    className={`
                                        h-5 w-5
                                        transition-colors
                                        ${
                                        isActive
                                            ? "text-blue-400"
                                            : "group-hover:text-blue-400"
                                    }
                                    `}
                                />

                                <span>{item.name}</span>
                            </a>
                        );
                    })}

                </nav>

                {/* Resume */}
                <div className="mt-8">

                    <a
                        href="/Ankur-Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        className="
        flex items-center justify-center gap-3
        rounded-lg
        border border-slate-700
        bg-slate-900/40
        px-4 py-3
        text-sm font-medium text-slate-300
        transition
        hover:border-blue-500/60
        hover:bg-blue-500/5
        hover:text-blue-300
    "
                    >
                        <Download className="h-4 w-4" />
                        <span>Download Resume</span>
                    </a>

                </div>

                {/* Social */}
                <div className="mt-auto">
                    <p className="mb-5 text-sm font-medium text-slate-300">
                        Connect with me
                    </p>

                    <div className="flex items-center gap-5">

                        {/* GitHub */}
                        <a
                            href="https://github.com/Ankur400web"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-slate-500 transition hover:text-blue-400"
                        >
                            <GitBranch className="h-5 w-5" />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/ankur-kumar-b78299432/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-slate-500 transition hover:text-blue-400"
                        >
                            <span className="text-sm font-bold">in</span>
                        </a>

                        {/* X */}
                        <a
                            href="https://x.com/ankurku7365"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X"
                            className="text-slate-500 transition hover:text-blue-400"
                        >
                            <span className="text-sm font-medium">X</span>
                        </a>

                        {/* Gmail */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=itsmavrick007@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Email"
                            className="text-slate-500 transition hover:text-blue-400"
                        >
                            <Mail className="h-5 w-5" />
                        </a>

                    </div>
                </div>

            </aside>
        </>
    );
}

export default Sidebar;