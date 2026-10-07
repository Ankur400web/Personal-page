import { BookOpen, Building2, ShoppingCart } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Banking Management System",
        description:
            "A backend banking application built with Java and Spring Boot for managing users, accounts, and banking operations through REST APIs.",
        technologies: ["Java", "Spring Boot", "MySQL"],
        features: [
            "User registration and management",
            "Account management",
            "RESTful API architecture",
            "DTO-based request and response handling",
            "Global exception handling",
        ],
        icon: <Building2 className="h-7 w-7" />,
        githubUrl:
            "https://github.com/Ankur400web/banking-system.git",
    },

    {
        title: "Library Management System",
        description:
            "A Java-based library application designed to manage books, members, and borrowing operations with database persistence.",
        technologies: ["Java", "JDBC", "MySQL"],
        features: [
            "Book management",
            "Member management",
            "Issue and return operations",
            "Database persistence",
            "CRUD-based application flow",
        ],
        icon: <BookOpen className="h-7 w-7" />,
        githubUrl:
            "https://github.com/Ankur400web/library-management-system.git",
    },

    {
        title: "ShopSphere",
        description:
            "A full-stack e-commerce platform focused on product management, authentication, inventory, cart operations, and order processing.",
        technologies: [
            "Java",
            "Spring Boot",
            "PostgreSQL",
            "React",
        ],
        features: [
            "Authentication and authorization",
            "Product and inventory management",
            "Shopping cart",
            "REST APIs",
            "React frontend",
        ],
        icon: <ShoppingCart className="h-7 w-7" />,
        githubUrl:
            "https://github.com/Ankur400web/ShopSphere.git",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="px-6 py-20 sm:px-10 lg:px-12"
        >
            {/* Heading */}
            <div className="mb-7">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
                    Portfolio
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-white">
                    My Projects
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                    Applications I've built while learning backend
                    engineering, databases, APIs, and full-stack development.
                </p>
            </div>

            {/* Project cards */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;