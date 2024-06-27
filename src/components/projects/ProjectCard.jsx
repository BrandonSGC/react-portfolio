import { LinkIcon, GitHubIcon } from "../../assets";
import { Carousel } from "../common/Carousel";
import { TagsList } from "../common/TagsList";

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
    <div className="grid mx-auto overflow-hidden shadow-lg rounded-xl lg:grid-cols-2">
      <a
        className={`flex items-center justify-center p-8 bg-slate-200 dark:bg-slate-600 ${
          invertOrder && "lg:col-start-2 lg:col-end-3"
        }`}
        href={url}
        target="_blank"
      >
        <Carousel images={images} autoPlay />
      </a>

      <div
        className={`p-8 space-y-3 bg-slate-100 dark:bg-slate-800 ${
          invertOrder && "lg:col-start-1 lg:col-end-2 lg:row-start-1"
        }`}
      >
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="dark:text-slate-200">{description}</p>
        <TagsList tags={tags} />

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
