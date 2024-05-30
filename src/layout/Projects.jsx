import { Container, Heading, ProjectsList } from "../components";
import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <main id="projects" className="py-10">
      <Container>
        <Heading
          title="Projects"
          subtitle="Some of the noteworthy projects I have built"
        />
        <ProjectsList projects={projects} />
      </Container>
    </main>
  );
};
