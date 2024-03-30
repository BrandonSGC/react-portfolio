export const Heading = ({ title, subtitle='' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h3 className="px-4 py-1 mb-5 text-lg font-medium rounded-3xl bg-slate-200 text-slate-700 dark:text-white dark:bg-slate-700">
        {title}
      </h3>
      {subtitle !== '' && <p className="text-balance">{subtitle}</p>}
    </div>
  );
};