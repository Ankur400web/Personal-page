import {
    Code2,
    Database,
    Server,
    Target,
    Brain,
    GitBranch,
} from "lucide-react";

function About() {
    return (
        <section
            id="about"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            {/* Heading */}
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                    About Me
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Building reliable software.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    I'm a self-driven developer focused on backend engineering,
                    system design, and building practical software solutions.
                </p>
            </div>

            {/* Introduction + Focus */}
            <div className="grid gap-6 lg:grid-cols-3">

                {/* Introduction */}
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/30 hover:bg-[#151e2e] lg:col-span-2">

                    <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                            <Code2 className="h-5 w-5 text-blue-400" />
                        </div>

                        <h3 className="text-xl font-semibold text-white">
                            Who I am
                        </h3>
                    </div>

                    <p className="max-w-3xl leading-8 text-slate-400">
                        I'm Ankur Kumar, a self-driven developer focused on
                        Java backend development. I enjoy designing APIs,
                        working with databases, and understanding how software
                        systems behave from the application layer down to the
                        data layer.
                    </p>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                        My primary stack includes Java, Spring Boot, REST APIs,
                        PostgreSQL, MySQL, JPA, and application architecture.
                        I learn through building real projects, debugging
                        problems, and applying engineering concepts in
                        practical applications.
                    </p>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-400">
                        Alongside backend development, I'm expanding my
                        knowledge of frontend engineering, Docker, system
                        design, and AI integration to become capable of
                        building complete, production-oriented systems.
                    </p>
                </div>

                {/* Current Focus */}
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/30 hover:bg-[#151e2e]">

                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                        <Target className="h-6 w-6 text-blue-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-white">
                        Current Focus
                    </h3>

                    <ul className="mt-5 space-y-4 text-slate-400">
                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            Java & Spring Boot
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            REST API development
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            PostgreSQL & database design
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            System design
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            DSA & problem solving
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            AI integration
                        </li>
                    </ul>
                </div>
            </div>

            {/* Engineering Areas */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">

                <div className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#151e2e]">
                    <Code2 className="h-7 w-7 text-blue-400 transition duration-300 group-hover:scale-110" />

                    <h3 className="mt-5 text-lg font-semibold text-white">
                        Backend Engineering
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                        Designing Java applications with Spring Boot, REST
                        APIs, validation, authentication, exception handling,
                        and layered service architecture.
                    </p>
                </div>

                <div className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#151e2e]">
                    <Database className="h-7 w-7 text-blue-400 transition duration-300 group-hover:scale-110" />

                    <h3 className="mt-5 text-lg font-semibold text-white">
                        Data & Architecture
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                        Working with relational databases, SQL, entity
                        relationships, persistence, database design, and
                        application architecture.
                    </p>
                </div>

                <div className="group rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#151e2e]">
                    <Brain className="h-7 w-7 text-blue-400 transition duration-300 group-hover:scale-110" />

                    <h3 className="mt-5 text-lg font-semibold text-white">
                        Problem Solving
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                        Practicing data structures and algorithms through
                        LeetCode while focusing on efficient solutions,
                        complexity analysis, and systematic problem solving.
                    </p>
                </div>
            </div>

            {/* Mindset */}
            <div className="mt-6 rounded-2xl border border-slate-800 bg-[#111827] p-7 transition duration-300 hover:border-blue-500/30">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-start gap-4">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                            <GitBranch className="h-5 w-5 text-blue-400" />
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Development Mindset
                            </h3>

                            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                                Understand the fundamentals. Build real
                                software. Study the architecture. Learn from
                                failures. Improve continuously.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 whitespace-nowrap text-sm text-blue-400">
                        <Server className="h-4 w-4" />
                        Always building
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;