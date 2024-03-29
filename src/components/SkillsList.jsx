export const SkillsList = ({skills}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10">
      {skills.map(skill => (
        <div key={skill.id}>
          <img className="mx-auto size-20" src={skill.iconURL} alt={`${skill.name} icon`} />
          <p className="text-center">{skill.name}</p>
        </div>
      ))}
    </div>
  )
}
