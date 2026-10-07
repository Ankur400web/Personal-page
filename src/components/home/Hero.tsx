import {
    ArrowRight,
    Mail,
    GitBranch,
    Download,
    Terminal,
} from "lucide-react";

function Hero() {
    return (
        <section
            id="home"
            className="
                relative flex min-h-[calc(100vh-4rem)]
                items-center overflow-hidden
                px-6 py-20
                sm:px-10
                lg:min-h-screen lg:px-12
            "
        >

            {/* Background glow */}
            <div
                className="
                    pointer-events-none absolute
                    left-[35%] top-[20%]
                    h-72 w-72
                    rounded-full
                    bg-blue-500/[0.04]
                    blur-3xl
                "
            />

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl">

                {/* Availability */}
                <div className="mb-7 flex items-center gap-3">

                    <span className="relative flex h-2.5 w-2.5">
                        <span
                            className="
                                absolute inline-flex
                                h-full w-full
                                animate-ping
                                rounded-full
                                bg-emerald-400
                                opacity-60
                            "
                        />

                        <span
                            className="
                                relative inline-flex
                                h-2.5 w-2.5
                                rounded-full
                                bg-emerald-400
                            "
                        />
                    </span>

                    <span className="text-sm font-medium text-slate-400">
                        Open to opportunities
                    </span>

                </div>

                {/* Greeting */}
                <p className="text-lg text-slate-400">
                    Hi, I'm
                </p>

                {/* Name */}
                <h1
                    className="
                        mt-2
                        text-5xl font-bold
                        tracking-tight text-white
                        sm:text-6xl
                        lg:text-7xl
                    "
                >
                    Ankur Kumar
                </h1>

                {/* Role */}
                <h2
                    className="
                        mt-5
                        text-2xl font-semibold
                        text-blue-400
                        sm:text-3xl
                    "
                >
                    Java Backend Developer
                </h2>

                {/* Stack */}
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-400">

                    <span>Java</span>
                    <span className="text-slate-700">•</span>

                    <span>Spring Boot</span>
                    <span className="text-slate-700">•</span>

                    <span>PostgreSQL</span>
                    <span className="text-slate-700">•</span>

                    <span>React</span>
                    <span className="text-slate-700">•</span>

                    <span>TypeScript</span>

                </div>

                {/* Divider */}
                <div className="mt-8 h-px w-16 bg-blue-500" />

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                    I build backend systems and REST APIs with Java and Spring Boot,
                    working with relational databases and modern development practices.
                    I enjoy turning requirements into well-structured applications and
                    continuously improving my understanding of software architecture.
                </p>
                {/* Actions */}
                <div className="mt-9 flex flex-wrap gap-3">

                    <a
                        href="#projects"
                        className="
                            group flex items-center gap-2
                            rounded-lg
                            bg-blue-600
                            px-5 py-3
                            text-sm font-medium text-white
                            shadow-lg shadow-blue-500/10
                            transition
                            hover:bg-blue-500
                            hover:shadow-blue-500/20
                        "
                    >
                        <Terminal className="h-4 w-4" />

                        <span>View Projects</span>

                        <ArrowRight
                            className="
                                h-4 w-4
                                transition-transform
                                group-hover:translate-x-1
                            "
                        />
                    </a>

                    <a
                        href="/Ankur-Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="
                        flex items-center gap-2
                        rounded-lg
                        border border-slate-700
                        bg-slate-900/40
                        px-5 py-3
                        text-sm font-medium
                        text-slate-300
                        transition
                        hover:border-blue-500/50
                        hover:text-white
    "
                    >
                        <Download className="h-4 w-4" />
                        <span>Resume</span>
                    </a>

                    <a
                        href="https://github.com/Ankur400web"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            flex items-center gap-2
                            rounded-lg
                            border border-slate-800
                            px-5 py-3
                            text-sm font-medium
                            text-slate-400
                            transition
                            hover:border-slate-600
                            hover:text-white
                        "
                    >
                        <GitBranch className="h-4 w-4" />

                        <span>GitHub</span>
                    </a>

                    <a
                        href="#contact"
                        className="
        flex items-center gap-2
        rounded-lg
        border border-slate-800
        px-5 py-3
        text-sm font-medium
        text-slate-400
        transition
        hover:border-slate-600
        hover:text-white
    "
                    >
                        <Mail className="h-4 w-4" />
                        <span>Contact</span>
                    </a>

                </div>

                {/* Developer signal */}
                <div
                    className="
                        mt-14
                        flex flex-wrap
                        items-center gap-x-8 gap-y-3
                        border-t border-slate-800/80
                        pt-6
                        text-xs text-slate-500
                    "
                >
                    <span>Java Backend</span>
                    <span>Spring Boot</span>
                    <span>REST APIs</span>
                    <span>Database Design</span>
                </div>

            </div>

        </section>
    );
}

export default Hero;
