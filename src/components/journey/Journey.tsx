import { BookOpen, Code2, GraduationCap, Rocket } from "lucide-react";

const journey = [
    {
        year: "2026",
        title: "Java Backend Development",
        description:
            "Focused on Java, Spring Boot, REST APIs, PostgreSQL, authentication, application architecture, and backend engineering practices.",
        icon: Code2,
        current: true,
    },
    {
        year: "2026",
        title: "Building Production-Oriented Projects",
        description:
            "Built a Banking Management System and developed ShopSphere to apply backend architecture, database design, APIs, authentication, inventory, and full-stack development concepts.",
        icon: Rocket,
    },
    {
        year: "2026",
        title: "DSA & Problem Solving",
        description:
            "Consistently practicing data structures and algorithms through LeetCode, focusing on efficient solutions, complexity analysis, and structured problem solving.",
        icon: BookOpen,
    },
    {
        year: "2025",
        title: "Started Software Development",
        description:
            "Started building a foundation in programming, databases, web technologies, Git, software development practices, and computer science fundamentals.",
        icon: GraduationCap,
    },
];

function Journey() {
    return (
        <section
            id="journey"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            {/* Heading */}
            <div className="mb-12">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                    My Journey
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white">
                    Learning. Building. Improving.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    A progression through the technologies, projects, and
                    engineering concepts I'm developing.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl">
                <div className="absolute left-6 top-0 h-full w-px bg-slate-800" />

                <div className="space-y-10">
                    {journey.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={`${item.year}-${item.title}`}
                                className="relative flex gap-6"
                            >
                                {/* Timeline icon */}
                                <div
                                    className={`
                                        relative z-10
                                        flex h-12 w-12 shrink-0
                                        items-center justify-center
                                        rounded-xl border
                                        transition duration-300
                                        ${
                                        item.current
                                            ? "border-blue-500/50 bg-blue-500/10"
                                            : "border-slate-700 bg-[#111827]"
                                    }
                                    `}
                                >
                                    <Icon
                                        className={`
                                            h-5 w-5
                                            ${
                                            item.current
                                                ? "text-blue-400"
                                                : "text-slate-500"
                                        }
                                        `}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className="
                                        flex-1 rounded-2xl
                                        border border-slate-800
                                        bg-[#111827] p-6
                                        transition duration-300
                                        hover:border-blue-500/30
                                        hover:bg-[#151e2e]
                                    "
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.title}
                                        </h3>

                                        <span
                                            className="
                                                rounded-full
                                                border border-slate-700
                                                bg-slate-900
                                                px-3 py-1
                                                text-xs font-medium
                                                text-slate-400
                                            "
                                        >
                                            {item.year}
                                        </span>
                                    </div>

                                    <p className="mt-3 leading-7 text-slate-400">
                                        {item.description}
                                    </p>

                                    {item.current && (
                                        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-400">
                                            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                                            Currently focused
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Journey;