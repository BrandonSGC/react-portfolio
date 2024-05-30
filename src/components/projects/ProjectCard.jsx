import { LinkIcon, GitHubIcon } from "../../assets";
import { Carousel } from "../common/Carousel";

export const ProjectCard = ({
  images,
  name,
  description,
  tags,
  invertOrder,
  url,
  githubURL,
}) => {
  return (
    <div className="grid mx-auto overflow-hidden shadow-lg rounded-xl md:grid-cols-2">
      <a
        className={`flex items-center justify-center p-8 bg-slate-200 dark:bg-slate-600 ${
          invertOrder && "md:col-start-2 md:col-end-3"
        }`}
        href={url}
        target="_blank"
      >
        <Carousel images={images} autoPlay/>
      </a>

      <div
        className={`p-8 space-y-3 bg-slate-100 dark:bg-slate-800 ${
          invertOrder && "md:col-start-1 md:col-end-2 md:row-start-1"
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

        <div className="flex items-center gap-2">
          <a
            className="inline-block duration-200 hover:scale-105"
            href={url}
            target="_blank"
          >
            <LinkIcon className="size-6 text-slate-500 dark:text-slate-300" />
          </a>
          <a
            className="inline-block duration-200 hover:scale-105"
            href={githubURL}
            target="_blank"
          >
            <GitHubIcon className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
};
