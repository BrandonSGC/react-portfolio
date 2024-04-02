import {
  ExperienceCard,
  Heading,
  NavBar,
  ProjectCard,
  SkillsList,
  TestimonialCard,
} from "./components/";
import { AboutMe, Footer, Hero } from "./layout/";
import { skills, experiences, projects, testimonials } from "./data/";

function App() {
  return (
    <>
      <header className="fixed w-full bg-slate-100 dark:bg-slate-950">
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
          <SkillsList skills={skills} />
        </div>
      </section>

      <section id="experience" className="py-10 bg-slate-100 dark:bg-slate-900">
        <div className="mycontainer">
          <Heading
            title="Experience"
            subtitle="Here is a quick summary of my most recent experience"
          />

          {experiences?.map((experience) => (
            <ExperienceCard
              key={experience.id}
              logoURL={experience.logoURL}
              companyName={experience.companyName}
              startDate={experience.startDate}
              finishDate={experience.finishDate}
              jobTitle={experience.jobTitle}
              time={experience.time}
              responsabilities={experience.responsabilities}
            />
          ))}
        </div>
      </section>

      <main id="projects" className="py-10">
        <div className="mycontainer">
          <Heading
            title="Projects"
            subtitle="Some of the noteworthy projects I have built:"
          />

          <div className="grid gap-4 mt-10">
            {projects?.map((project, i) => (
              <ProjectCard
                key={project.id}
                imageURL={project.imageURL}
                name={project.name}
                description={project.description}
                tags={project.tags}
                invertOrder={i % 2 === 0}
                url={project.url}
              />
            ))}
          </div>
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

          <div className="grid gap-4 mt-10 md:grid-cols-3 md:gap-4 lg:gap-14">
            {testimonials?.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                authorImageURL={testimonial.authorImageURL}
                name={testimonial.name}
                comment={testimonial.comment}
                jobPosition={testimonial.jobPosition}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
