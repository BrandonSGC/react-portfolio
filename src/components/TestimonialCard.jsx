export const TestimonialCard = ({
  authorImageURL,
  name,
  comment,
  jobPosition,
}) => {
  return (
    <div className="p-8 space-y-4 shadow rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
      <div>
        <img
          className="mx-auto rounded-full size-20"
          src={authorImageURL}
          alt={`${name} testimonial`}
        />
      </div>

      <p className="font-light">{comment}</p>

      <div className="space-y-2 text-center">
        <p className="font-semibold">{name}</p>
        <span className="font-light">{jobPosition}</span>
      </div>
    </div>
  );
};
