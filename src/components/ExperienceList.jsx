import { ExperienceCard } from "./";

export const ExperienceList = ({ experiences }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-5 md:flex-row">
      {experiences?.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
};
