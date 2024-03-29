export const ExperienceCard = ({
  logoURL,
  date,
  title,
  responsabilities = [],
}) => {
  return (
    <div className="my-5">
      <div className="max-w-[60%]">
        <img src={logoURL} alt={title} />
      </div>
      <p className="my-3">{date}</p>
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <ul className="pl-6 font-medium list-disc text-slate-600 dark:text-slate-300">
          {/* // TODO: Generate real unique id. */}
          {responsabilities?.map((responsability, i) => (
            <li key={i}>{responsability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
