export const ProjectCard = ({
  imageURL,
  name,
  description,
  tags = [],
  invertOrder = false,
  url,
}) => {
  return (
    <div className="grid max-w-5xl mx-auto overflow-hidden shadow-lg rounded-xl md:grid-cols-2">
      <a
        className={`flex items-center justify-center p-8 bg-slate-200 dark:bg-slate-600 ${
          invertOrder ? "md:col-start-2 md:col-end-3" : ""
        }`}
        href={url}
        target="_blank"
      >
        <img className="duration-200 rounded-xl hover:scale-95" src={imageURL} alt={name} />
      </a>

      <div
        className={`p-8 space-y-3 bg-slate-100 dark:bg-slate-800 ${
          invertOrder ? "md:col-start-1 md:col-end-2 md:row-start-1" : ""
        }`}
      >
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="dark:text-slate-300">{description}</p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {tags?.map((tag, i) => (
            <li
              className="inline-block px-2 py-1 rounded-xl bg-slate-200 text-slate-600 dark:text-slate-300 dark:bg-slate-600"
              key={i}
            >
              {tag}
            </li>
          ))}
        </ul>

        <a className="inline-block" href={url} target="_blank">
          <img
            className="mt-5 duration-200 hover:scale-110"
            src="/icons/link.svg"
            alt="Link icon"
          />
        </a>
      </div>
    </div>
  );
};
