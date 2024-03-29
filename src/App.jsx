import { Heading, NavBar, SkillsList } from "./components/";
import { AboutMe, Hero } from "./layout/";

import { skills } from './data/skills';

function App() {
  return (
    <>
      <header className="relative">
        <div className="mycontainer">
          <NavBar />
        </div>
      </header>

      <section className="py-20">
        <div className="mycontainer flex items-center">
          <Hero />
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="mycontainer py-20">
          <Heading title='About Me'/>
          <AboutMe />
        </div>
      </section>

      <section className="py-20">
        <div className="mycontainer">
          <Heading title="Skills" subtitle="The skills, tools and technologies that I work with"/>
          <SkillsList skills={skills} />
        </div>
      </section>

    </>
  );
}

export default App;
