export const ExperienceCard = ({
  logoURL,
  companyName,
  startDate,
  finishDate,
  jobTitle,
  time,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5 p-6 shadow-lg max-w-[400px] rounded-xl bg-slate-200 dark:bg-slate-800">
      <div className="flex flex-col items-center justify-center gap-1 font-light">
        <img
          className="block mx-auto max-w-[150px] max-h-[30px]"
          src={logoURL}
          alt={companyName}
          loading="lazy"
        />
        <p>{time}</p>
        <p className="text-slate-700 dark:text-white">
          {startDate} - {finishDate}
        </p>
      </div>

      <div className="text-slate-600 dark:text-slate-300">
        <h3 className="mb-2 text-xl font-semibold text-center">{jobTitle}</h3>
        <p className="text-center ">{description}</p>
      </div>
    </div>
  );
};
