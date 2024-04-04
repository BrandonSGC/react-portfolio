import { AboutMe, Footer, Hero } from "./layout/";
import { experiences, projects, skills, testimonials } from "./data/";
import {
  ExperienceList,
  Heading,
  NavBar,
  ProjectsList,
  SkillsList,
  TestimonialsList,
} from "./components/";

function App() {
  return (
    <>
      <header className="fixed z-50 w-full bg-slate-100 dark:bg-slate-950">
        <div className="mycontainer">
          <NavBar />
        </div>
      </header>

      <section id="home" className="pt-20 pb-20 md:pt-44">
        <div className="flex items-center mycontainer">
          <Hero />
        </div>
      </section>

      <section id="about" className="bg-slate-100 dark:bg-slate-800">
        <div className="py-10 mycontainer">
          <Heading title="About Me" />
          <AboutMe />
        </div>
      </section>

      <section id="skills" className="py-10">
        <div className="mycontainer">
          <Heading
            title="Skills"
            subtitle="These are the technologies that I work with"
          />
          <SkillsList />
        </div>
      </section>

      <section id="experience" className="py-10 bg-slate-100 dark:bg-slate-900">
        <div className="mycontainer">
          <Heading
            title="Experience"
            subtitle="Here is a quick summary of my most recent experience"
          />
          <ExperienceList experiences={experiences} />
        </div>
      </section>

      <main id="projects" className="py-10">
        <div className="mycontainer">
          <Heading
            title="Projects"
            subtitle="Some of the noteworthy projects I have built:"
          />
          <ProjectsList projects={projects} />
        </div>
      </main>

      <section
        id="testimonials"
        className="py-10 bg-slate-100 dark:bg-slate-900"
      >
        <div className="mycontainer">
          <Heading
            title="Testimonials"
            subtitle="Nice things people have said about me:"
          />
          <TestimonialsList testimonials={testimonials} />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
