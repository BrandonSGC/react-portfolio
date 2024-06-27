import { GitHubIcon } from "../../assets";

export const SocialMediaList = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://www.linkedin.com/in/brandon-g%C3%B3mez-064904239/"
        target="_blank"
      >
        <img src="/icons/linkedin.svg" alt="icon" />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer"
        href="https://github.com/BrandonSGC"
        target="_blank"
      >
        <GitHubIcon className="size-10" />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://wa.me/50670428451"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp icon" />
      </a>
    </div>
  );
};
