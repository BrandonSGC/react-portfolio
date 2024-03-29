export const Heading = ({ title, subtitle='' }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h3 className="text-lg font-medium px-4 py-1 mb-5 rounded-3xl dark:bg-slate-700">
        {title}
      </h3>
      {subtitle !== '' && <p>{subtitle}</p>}
    </div>
  );
};