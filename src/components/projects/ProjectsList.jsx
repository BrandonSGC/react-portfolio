import { ProjectCard } from "./ProjectCard";

export const ProjectsList = ({ projects }) => {
  return (
    <div className="grid gap-4 mt-10">
      {projects?.map((project, i) => (
        <ProjectCard 
          key={project.id} 
          {...project} 
          invertOrder={i % 2 === 0} 
        />
      ))}
    </div>
  );
};
