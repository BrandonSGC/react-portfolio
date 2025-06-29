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
    <a
      href="https://www.linkedin.com/in/brandon-g%C3%B3mez-064904239/"
      target="_blank"
    >
      <div className="flex flex-col gap-4 p-6 shadow-lg max-w-[400px] max-h-[286px] rounded-xl bg-slate-200 dark:bg-slate-600">
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

        <div className="overflow-hidden text-slate-600 dark:text-slate-300">
          <h3 className="mb-2 text-xl font-semibold text-center">{jobTitle}</h3>
          <p className="text-center line-clamp-4">{description}</p>
        </div>
      </div>
    </a>
  );
};
