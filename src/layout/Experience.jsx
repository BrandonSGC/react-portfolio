import { Container, ExperienceList, Heading } from "../components";
import { experiences } from "../data/experiences";

export const Experience = () => {
  return (
    <section id="experience" className="py-10 bg-slate-100 dark:bg-slate-900">
      <Container>
        <Heading
          title="Experience"
          subtitle="Here is a quick summary of my most recent experience"
        />
        <ExperienceList experiences={experiences} />
      </Container>
    </section>
  );
};
