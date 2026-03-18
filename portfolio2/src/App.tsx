import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Contact = lazy(() => import("./components/sections/Contact"));

const Loading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useSmoothScroll();

  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <footer className="py-6 text-center text-text/60 text-sm bg-primary border-t border-[var(--glass-border)]">
        <p>© {new Date().getFullYear()} Gowtham Murugasamy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
