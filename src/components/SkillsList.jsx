export const SkillsList = ({skills}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {skills.map(skill => (
        <div className="duration-300 hover:scale-105" key={skill.id}>
          <img className="mx-auto size-20" src={skill.iconURL} alt={`${skill.name} icon`} />
          <p className="text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  )
}
