import {
  ExperienceCard,
  Heading,
  NavBar,
  ProjectCard,
  SkillsList,
  TestimonialCard,
} from "./components/";
import { AboutMe, Footer, Hero } from "./layout/";
import { skills } from "./data/skills";

function App() {
  return (
    <>
      <header className="fixed w-full bg-slate-100 dark:bg-slate-950">
        <div className="mycontainer">
          <NavBar />
        </div>
      </header>

      <section className="pt-20 pb-20 md:pt-44">
        <div className="flex items-center mycontainer">
          <Hero />
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="py-10 mycontainer">
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
            subtitle="Here is a quick summary of my most recent experience"
          />

          <ExperienceCard
            logoURL="/img/logo-intertab-solo.png"
            date="March 2024 - Present"
            title="Web Developer"
            responsabilities={[
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            ]}
          />

          <ExperienceCard
            logoURL="/img/sykes-logo.png"
            date="March 2024 - Present"
            title="Customer Service Agent"
            responsabilities={[
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            ]}
          />
        </div>
      </section>

      <main className="py-10">
        <div className="mycontainer">
          <Heading
            title="Projects"
            subtitle="Some of the noteworthy projects I have built:"
          />

          <div className="grid gap-4 mt-10">
            <ProjectCard
              imageURL="/img/nucleus.png"
              title="Nucleus Wallet"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eum. Omnis, sapiente? Porro pariatur est repellat error possimus ea dolore sint. Porro, quibusdam! Cumque facilis impedit reiciendis dicta accusamus consequatur"
              tags={["HTML", "CSS"]}
            />

            <ProjectCard
              imageURL="/img/nucleus.png"
              title="Nucleus Wallet"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eum. Omnis, sapiente? Porro pariatur est repellat error possimus ea dolore sint. Porro, quibusdam! Cumque facilis impedit reiciendis dicta accusamus consequatur"
              tags={["HTML", "CSS"]}
              invertOrder
            />

            <ProjectCard
              imageURL="/img/nucleus.png"
              title="Nucleus Wallet"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eum. Omnis, sapiente? Porro pariatur est repellat error possimus ea dolore sint. Porro, quibusdam! Cumque facilis impedit reiciendis dicta accusamus consequatur"
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS",
                "NodeJS",
                "PostgreSQL",
              ]}
            />
          </div>
        </div>
      </main>

      <section className="py-10 bg-slate-100 dark:bg-slate-900">
        <div className="mycontainer">
          <Heading
            title="Testimonials"
            subtitle="Nice things people have said about me:"
          />

          <div className="grid gap-4 mt-10 md:grid-cols-3 md:gap-4 lg:gap-14">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
