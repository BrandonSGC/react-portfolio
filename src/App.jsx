import { Heading, NavBar, SkillsList } from "./components/";
import { AboutMe, Hero } from "./layout/";

import { skills } from "./data/skills";

function App() {
  return (
    <>
      <header className="fixed bg-slate-100 dark:bg-slate-950 w-full">
        <div className="mycontainer">
          <NavBar />
        </div>
      </header>

      <section className="pb-20 pt-20 md:pt-44">
        <div className="mycontainer flex items-center">
          <Hero />
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="mycontainer py-10">
          <Heading title="About Me" />
          <AboutMe />
        </div>
      </section>

      <section className="py-10">
        <div className="mycontainer">
          <Heading
            title="Skills"
            subtitle="The skills, tools and technologies that I work with"
          />
          <SkillsList skills={skills} />
        </div>
      </section>

      <section className="py-10 bg-slate-100 dark:bg-slate-900">
        <div className="mycontainer">
          <Heading
            title="Experience"
            subtitle="The skills, tools and technologies that I work with"
          />
        </div>
      </section>

      <main className="py-10">
        <div className="mycontainer">
          <Heading
            title="Projects"
            subtitle="Some of the noteworthy projects I have built:"
          />
        </div>
      </main>

      <section className="py-10 bg-slate-100 dark:bg-slate-800">
        <div className="mycontainer">
          <Heading
            title="Testimonials"
            subtitle="Nice things people have said about me:"
          />
        </div>
      </section>

      <footer className="py-10">
        <div className="mycontainer">
          <Heading
            title="Get in touch"
            subtitle="What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
          />
        </div>
      </footer>
    </>
  );
}

export default App;
