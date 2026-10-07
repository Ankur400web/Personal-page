import "./App.css";

import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/home/Hero";
import Projects from "./components/projects/Projects";
import LeetCodeDashboard from "./components/leetcode/LeetCodeDashboard";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Journey from "./components/journey/Journey";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div className="portfolio-background min-h-screen text-white">
            <Sidebar />

            <main
                className="
                    portfolio-content
                    w-full
                    pt-16
                    lg:ml-[260px]
                    lg:w-[calc(100%-260px)]
                    lg:pt-0
                "
            >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <LeetCodeDashboard />
                <Journey />
                <Contact />
            </main>
        </div>
    );
}

export default App;