import quotes from "../../assets/quotes.svg";

export const TestimonialCard = ({ name, comment, jobPosition }) => {
  return (
    <div className="flex flex-col justify-between gap-2 px-4 pt-10 pb-5 mt-5 shadow rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
      <img className="mx-auto -mt-20 size-20" src={quotes} alt="quotes icon" />
      <div className="space-y-2 text-center">
        <p className="font-semibold">{name}</p>
        <span className="font-light">{jobPosition}</span>
      </div>
      <p className="font-light text-center">{comment}</p>
    </div>
  );
};
