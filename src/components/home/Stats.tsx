import { Code2, GitBranch } from "lucide-react";

function Stats() {
    return (
        <section className="grid grid-cols-1 gap-5 px-12 pb-8 md:grid-cols-3">

            {/* LeetCode */}
            <div className="group rounded-xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#151e2e]">

                <div className="flex items-center gap-3">
                    <Code2 className="h-7 w-7 text-blue-400" />

                    <h3 className="text-lg font-semibold text-white">
                        LeetCode
                    </h3>
                </div>

                <div className="mt-6 flex items-end justify-between">

                    <div>
                        <p className="text-4xl font-bold text-white">
                            450+
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Problems Solved
                        </p>
                    </div>

                    <div className="text-right text-sm">

                        <p className="text-slate-400">
                            <span className="mr-2 text-emerald-400">●</span>
                            Easy
                            <span className="ml-4 text-slate-300">
                                180
                            </span>
                        </p>

                        <p className="mt-2 text-slate-400">
                            <span className="mr-2 text-amber-400">●</span>
                            Medium
                            <span className="ml-4 text-slate-300">
                                220
                            </span>
                        </p>

                        <p className="mt-2 text-slate-400">
                            <span className="mr-2 text-rose-400">●</span>
                            Hard
                            <span className="ml-4 text-slate-300">
                                50
                            </span>
                        </p>

                    </div>

                </div>
            </div>

            {/* GitHub */}
            <div className="group rounded-xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#151e2e]">

                <div className="flex items-center gap-3">
                    <GitBranch className="h-7 w-7 text-slate-300" />

                    <h3 className="text-lg font-semibold text-white">
                        GitHub
                    </h3>
                </div>

                <div className="mt-6 flex items-end justify-between">

                    <div>
                        <p className="text-4xl font-bold text-white">
                            36
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Repositories
                        </p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold text-blue-400">
                            842
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Contributions
                        </p>
                    </div>

                </div>

                {/* Contribution blocks */}
                <div className="mt-5 flex gap-1">

                    {Array.from({ length: 28 }).map((_, index) => (
                        <span
                            key={index}
                            className={`h-3 w-3 rounded-sm ${
    index % 5 === 0
        ? "bg-blue-500"
        : index % 3 === 0
            ? "bg-blue-500/60"
            : "bg-blue-500/15"
}`}
                        />
                    ))}

                </div>

            </div>

            {/* LinkedIn */}
            <div className="group rounded-xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-[#151e2e]">

                <div className="flex items-center gap-3">

                    <span className="text-lg font-bold text-blue-400">
                        in
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                        LinkedIn
                    </h3>

                </div>

                <div className="mt-6 flex items-end justify-between">

                    <div>
                        <p className="text-4xl font-bold text-white">
                            500+
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Connections
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">
                            Open to
                        </p>

                        <p className="text-sm text-slate-300">
                            opportunities
                            <span className="ml-2 text-emerald-400">
                                ●
                            </span>
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Stats;
