import { ExpressIcon, GitHubIcon } from "../../assets";

const customIcons = {
  Express: ExpressIcon,
  GitHub: GitHubIcon,
};

export const SkillsList = ({ skills = [] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {skills?.map((skill) => {
        // Check if the skill has a custom icon component.
        const CustomIcon = customIcons[skill.name];

        return (
          <div className="duration-300 hover:scale-105" key={skill.id}>
            {CustomIcon ? (
              <CustomIcon className="mx-auto size-20" />
            ) : (
              <img
                className="mx-auto size-20"
                src={skill.iconURL}
                alt={`${skill.name} icon`}
              />
            )}
            <p className="text-center">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};
