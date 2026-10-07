import { Code2, ExternalLink } from "lucide-react";

function LeetCodeDashboard() {
    return (
        <section
            id="leetcode"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                    Problem Solving
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-white">
                    LeetCode
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    I regularly practice data structures and algorithms to
                    improve problem-solving, algorithmic thinking, and
                    implementation skills.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                {/* Main profile card */}
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-7 lg:col-span-2">
                    <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900">
                            <Code2 className="h-7 w-7 text-blue-400" />
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                LeetCode Profile
                            </p>

                            <h3 className="mt-1 text-2xl font-semibold text-white">
                                AlgoAnkur
                            </h3>

                            <p className="mt-3 max-w-xl leading-7 text-slate-400">
                                Solving algorithmic problems across arrays,
                                strings, hashing, binary search, linked lists,
                                stacks, queues, recursion, sorting, and other
                                core DSA topics.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-slate-800 pt-6">
                        <p className="text-sm font-medium text-slate-300">
                            Current Focus
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                "Arrays",
                                "Hashing",
                                "Binary Search",
                                "Linked Lists",
                                "Stacks & Queues",
                                "Sorting",
                                "Recursion",
                                "Algorithms",
                            ].map((topic) => (
                                <span
                                    key={topic}
                                    className="
                                        rounded-md
                                        border border-slate-700
                                        bg-slate-900/60
                                        px-3 py-1.5
                                        text-sm text-slate-400
                                    "
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Profile link */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#111827] p-7">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
                            Practice
                        </p>

                        <h3 className="mt-3 text-xl font-semibold text-white">
                            View my solutions
                        </h3>

                        <p className="mt-3 leading-7 text-slate-400">
                            Explore my LeetCode profile and follow my ongoing
                            problem-solving progress.
                        </p>
                    </div>

                    <a
                        href="https://leetcode.com/u/AlgoAnkur/"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            mt-7 inline-flex items-center justify-center gap-2
                            rounded-lg
                            border border-slate-700
                            bg-slate-900/60
                            px-4 py-3
                            text-sm font-medium text-slate-300
                            transition
                            hover:border-blue-500/50
                            hover:bg-blue-500/5
                            hover:text-blue-400
                        "
                    >
                        View LeetCode
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default LeetCodeDashboard;