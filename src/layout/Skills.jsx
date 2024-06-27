import { useState } from "react";
import { Container, Heading, SkillsList } from "../components";
import { skills } from "../data";

export const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const handleChange = (e) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === "") {
      setFilteredSkills(skills);
      return;
    }
    const updatedSkills = skills.filter((skill) =>
      skill.categories.includes(selectedFilter)
    );
    setFilteredSkills(updatedSkills);
  };

  return (
    <section id="skills" className="py-10 bg-slate-100 dark:bg-slate-900">
      <Container>
        <Heading
          title="Skills"
          subtitle="These are the technologies that I work with"
        />

        <div className="">
          <div className="relative flex items-center justify-center gap-2 mt-3">
            <select
              className="px-3 py-1 border rounded cursor-pointer border-slate-700 bg-slate-200 dark:bg-slate-800 dark:border-slate-200"
              onChange={handleChange}
              id="filters"
              name="filters"
              defaultValue={""}
              aria-label="Filters"
            >
              <option value="">All Categories</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Framework">Frameworks</option>
              <option value="Database">Databases</option>
              <option value="ORM">ORM</option>
              <option value="Tool">Tools</option>
            </select>
          </div>
          <SkillsList skills={filteredSkills} />
        </div>
      </Container>
    </section>
  );
};
