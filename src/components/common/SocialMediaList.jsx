import { GitHubIcon } from "../../assets";

export const SocialMediaList = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://www.linkedin.com/in/brandon-g%C3%B3mez-064904239/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <img src="/icons/linkedin.svg" alt="LinkedIn icon" />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer"
        href="https://github.com/BrandonSGC"
        target="_blank"
        aria-label="Github"
      >
        <GitHubIcon className="size-10" />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://wa.me/50670428451"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <img src="/icons/whatsapp.svg" alt="WhatsApp icon" />
      </a>
    </div>
  );
};
