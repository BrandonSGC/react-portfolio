import { v4 } from "uuid";

export const ExperienceCard = ({
  logoURL,
  companyName,
  startDate,
  finishDate,
  jobTitle,
  time,
  responsabilities = [],
}) => {
  return (
    <div className="max-w-[800px] grid-cols-3 md:gap-6 p-6 shadow-lg rounded-xl bg-slate-200 dark:bg-slate-800 flex flex-col gap-4 md:grid">
      <div className="flex items-center justify-center">
        <img
          className="block mx-auto max-w-[150px]"
          src={logoURL}
          alt={companyName}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="font-light">{time}</p>
        <p className="flex flex-col col-start-3 col-end-4 font-light text-slate-700 dark:text-white md:flex-row md:items-center md:justify-center">
          {startDate} - {finishDate}
        </p>
      </div>

      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <h3 className="mb-2 text-xl font-bold text-center">{jobTitle}</h3>
        <ul className="pl-6 list-disc text-slate-600 dark:text-slate-300">
          {responsabilities?.map((responsability) => (
            <li key={v4()}>{responsability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
