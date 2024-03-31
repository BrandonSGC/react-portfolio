export const ProjectCard = ({
  imageURL,
  name,
  description,
  tags = [],
  invertOrder = false,
  url,
}) => {
  return (
    <div className="grid max-w-5xl mx-auto overflow-hidden rounded-xl md:grid-cols-2">
      <div
        className={`flex items-center justify-center p-8 bg-slate-300 dark:bg-slate-600 ${
          invertOrder ? "md:col-start-2 md:col-end-3" : ""
        }`}
      >
        <img className="rounded-xl" src={imageURL} alt={name} />
      </div>

      <div
        className={`p-8 space-y-3 lg:space-y-8 bg-slate-200 dark:bg-slate-800 ${
          invertOrder ? "md:col-start-1 md:col-end-2 md:row-start-1" : ""
        }`}
      >
        <h2>{name}</h2>
        <p className="dark:text-slate-300">{description}</p>
        <ul className="flex flex-wrap gap-2 text-sm">
          {tags?.map((tag, i) => (
            <li
              className="inline-block px-2 py-1 rounded-xl dark:text-slate-300 dark:bg-slate-600"
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
