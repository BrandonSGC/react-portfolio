export const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-6 lg:col-start-1 lg:col-end-3">
        <h2 className="font-bold text-3xl md:text-6xl">Hi, I'm Brandon 👋</h2>
        <p className="text-balance">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>

        <div>
          <div className="flex gap-2 items-center">
            <img
              className="size-5"
              src="/icons/location.svg"
              alt="Location Icon"
            />
            <p>San José, Costa Rica</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="size-4 bg-green-500 rounded-full"></div>
            <p>Available for new projects</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img src="/icons/github.svg" alt="GitHub" />
          <img src="/icons/twitter.svg" alt="Twitter" />
          <img src="/icons/figma.svg" alt="Figma" />
        </div>
      </div>

      <div className="grid items-center">
        <img src="/img/programmer.svg" alt="Me" />
      </div>
    </div>
  );
};
