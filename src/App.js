import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import UseScrollToTop from "./hooks/useScrollToTop";

const About = lazy(() => import("./pages/AboutMe"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectSingle = lazy(() => import("./pages/ProjectSingle.jsx"));

function App() {
  const storedTheme = localStorage.theme || "dark";

  // Initialize the theme state with the stored theme preference.
  const [theme, setTheme] = useState(storedTheme);

  // Calculate the active theme based on the theme state.
  const activeTheme = theme === "dark" ? "light" : "dark";

  // Update localStorage when the theme changes.
  useEffect(() => {
    localStorage.theme = theme;
  }, [theme]);
  return (
    <AnimatePresence>
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Suspense fallback={""}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route
                path="projects/:name"
                element={<ProjectSingle />} // Remove the name prop here
              />

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <AppFooter />
        </Router>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
