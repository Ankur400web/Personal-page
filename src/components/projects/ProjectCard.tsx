import { GitBranch } from "lucide-react";
import type { ReactNode } from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    icon: ReactNode;
    githubUrl: string;
};

function ProjectCard({
                         title,
                         description,
                         technologies,
                         features,
                         icon,
                         githubUrl,
                     }: ProjectCardProps) {
    return (
        <article
            className="
                group flex h-full flex-col
                rounded-xl
                border border-slate-800
                bg-[#111827]
                p-6
                transition duration-300
                hover:-translate-y-1
                hover:border-blue-500/40
                hover:bg-[#151e2e]
            "
        >
            {/* Header */}
            <div className="flex items-start gap-4">
                <div
                    className="
                        flex h-14 w-14 shrink-0 items-center justify-center
                        rounded-lg
                        border border-slate-700
                        bg-slate-900
                        text-blue-400
                        transition duration-300
                        group-hover:border-blue-500/40
                        group-hover:bg-blue-500/5
                    "
                >
                    {icon}
                </div>

                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                        {title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="
                                    rounded-md
                                    border border-slate-700/80
                                    bg-slate-900/60
                                    px-2.5 py-1
                                    text-xs
                                    font-medium
                                    text-slate-400
                                "
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-6 text-slate-400">
                {description}
            </p>

            {/* Features */}
            <div className="mt-5 flex-1">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                    Key Features
                </p>

                <ul className="space-y-2">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-slate-400"
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-slate-800 pt-5">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="
                        inline-flex items-center gap-2
                        text-sm font-medium
                        text-slate-400
                        transition
                        hover:text-blue-400
                    "
                >
                    <GitBranch className="h-4 w-4" />
                    View on GitHub
                </a>
            </div>
        </article>
    );
}

export default ProjectCard;