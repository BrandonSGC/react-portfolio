export const SocialMediaList = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="duration-200 cursor-pointer hover:scale-125"
        src="/icons/github.svg"
        alt="GitHub"
      />
      <img
        className="duration-200 cursor-pointer hover:scale-125"
        src="/icons/twitter.svg"
        alt="Twitter"
      />
      <img
        className="duration-200 cursor-pointer hover:scale-125"
        src="/icons/figma.svg"
        alt="Figma"
      />
    </div>
  );
};
