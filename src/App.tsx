import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PipelineDivider } from "./components/PipelineDivider";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <PipelineDivider />
        <Experience />
        <Projects />
        <PipelineDivider />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
