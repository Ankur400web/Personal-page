import {
    Code2,
    Database,
    Globe,
    Server,
    Shield,
    Wrench,
} from "lucide-react";

const skillCategories = [
    {
        title: "Backend",
        icon: Server,
        skills: [
            "Java",
            "Spring Boot",
            "REST APIs",
            "JPA / Hibernate",
        ],
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            "PostgreSQL",
            "MySQL",
            "SQL",
            "Database Design",
        ],
    },
    {
        title: "Frontend",
        icon: Globe,
        skills: [
            "React",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },
    {
        title: "Programming & DSA",
        icon: Code2,
        skills: [
            "Java",
            "Python",
            "Data Structures",
            "Algorithms",
            "Problem Solving",
        ],
    },
    {
        title: "Security",
        icon: Shield,
        skills: [
            "Authentication",
            "Authorization",
            "JWT",
            "Spring Security",
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Maven",
            "IntelliJ IDEA",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                    Technical Skills
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white">
                    What I Work With
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    Technologies and tools I use while building backend
                    systems, full-stack applications, and production-oriented
                    software.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className="
                                group rounded-xl
                                border border-slate-800
                                bg-[#111827]
                                p-6
                                transition duration-300
                                hover:-translate-y-1
                                hover:border-blue-500/40
                                hover:bg-[#151e2e]
                            "
                        >
                            <div className="mb-5 flex items-center gap-4">
                                <div
                                    className="
                                        flex h-11 w-11 items-center justify-center
                                        rounded-lg
                                        border border-slate-700
                                        bg-slate-900
                                        transition duration-300
                                        group-hover:border-blue-500/40
                                        group-hover:bg-blue-500/5
                                    "
                                >
                                    <Icon className="h-5 w-5 text-blue-400" />
                                </div>

                                <h3 className="text-lg font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                                            rounded-md
                                            border border-slate-700/80
                                            bg-slate-900/60
                                            px-3 py-1.5
                                            text-sm
                                            text-slate-400
                                            transition
                                            group-hover:border-slate-600
                                            group-hover:text-slate-300
                                        "
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;