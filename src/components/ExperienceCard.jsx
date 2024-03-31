import { v4 } from 'uuid';

export const ExperienceCard = ({
  logoURL,
  companyName,
  startDate,
  finishDate,
  jobTitle,
  responsabilities = [],
}) => {
  return (
    <div className="max-w-[800px] grid-cols-3 gap-6 p-6 mx-auto my-5 rounded-xl bg-slate-200 dark:bg-slate-800 md:grid">
      <div className="flex items-center justify-center">
        <img src={logoURL} alt={companyName} />
      </div>
      <p className="col-start-3 col-end-4 my-3 font-light text-slate-700 dark:text-slate-300 md:flex md:items-center md:justify-center">
        {startDate} - {finishDate}
      </p>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <h3 className="mb-2 text-xl font-bold md:text-center">{jobTitle}</h3>
        <ul className="pl-6 list-disc text-slate-600 dark:text-slate-300">
          {responsabilities?.map((responsability) => (
            <li key={v4()}>{responsability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
