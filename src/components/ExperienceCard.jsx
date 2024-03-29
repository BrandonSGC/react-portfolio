export const ExperienceCard = ({
  logoURL,
  date,
  title,
  responsabilities = [],
}) => {
  return (
    <div className="max-w-[800px] grid-cols-3 gap-6 p-6 mx-auto my-5 rounded-xl bg-slate-200 dark:bg-slate-800 md:grid">
      <div className="flex items-center justify-center">
        <img className="" src={logoURL} alt={title} />
      </div>
      <p className="col-start-3 col-end-4 my-3 font-light text-slate-700 dark:text-slate-300 md:text-center">
        {date}
      </p>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <h3 className="mb-2 text-xl font-bold md:text-center">{title}</h3>
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
