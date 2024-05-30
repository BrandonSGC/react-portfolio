import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = ({ projects }) => {
  // Pagination.
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // TODO: Filters by Category, Tags...
  return (
    <div className="grid gap-4 mt-10">
      {currentProjects.map((project, i) => (
        <ProjectCard key={project.id} {...project} invertOrder={i % 2 === 0} />
      ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          className="border rounded size-6 border-slate-500 dark:border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20"
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from(
          { length: Math.ceil(projects.length / projectsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`border  rounded size-6  ${
                currentPage === i + 1
                  ? "bg-slate-300 hover:bg-slate-400 dark:text-slate-800"
                  : "border-slate-500 dark:border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          className="border rounded size-6 border-slate-500 dark:border-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-20"
          disabled={
            currentPage === Math.ceil(projects.length / projectsPerPage)
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
