import { GitHub } from "../assets";

export const SocialMediaList = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://www.linkedin.com/in/brandon-g%C3%B3mez-064904239/"
        target="_blank"
      >
        <img src="/icons/linkedin.svg" alt="icon" />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="https://github.com/BrandonSGC"
        target="_blank"
      >
        <GitHub />
      </a>

      <a
        className="duration-300 hover:scale-105 hover:cursor-pointer size-8"
        href="tel:+50670428451"
        target="_blank"
      >
        <img src="/icons/whatsapp.svg" alt="icon" />
      </a>
    </div>
  );
};
