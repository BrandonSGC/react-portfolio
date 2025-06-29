import { AvailableIcon, LocationIcon } from "../assets";
import { Container, SocialMediaList } from "../components";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-20 md:pt-44">
      <Container className="flex flex-col-reverse gap-5 md:grid md:grid-cols-[2fr,1fr] lg:gap-0">
        <div className="space-y-6 animate-fade-up animate-once md:animate-fade-right">
          <h2 className="text-3xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-slate-600 to-slate-900 dark:from-slate-100 dark:to-slate-400 bg-clip-text">
            Hi, I'm Brandon{" "}
            <span className="inline-block text-black animate-wiggle-more animate-infinite">
              👋🏼
            </span>
          </h2>
          <p className="text-balance">
            I'm a{" "}
            <span className="font-bold text-blue-400 dark:text-blue-300">
              Cloud Engineer
            </span>{" "}
            with a background in{" "}
            <span className="font-bold text-green-500 dark:text-green-600">
              Development
            </span>{" "}
            and a strong focus on cloud infrastructure, automation, and
            technical problem-solving. I work daily with scalable, cloud-based
            systems, gaining hands-on experience that supports my path toward
            becoming a{" "}
            <span className="font-bold text-purple-500 dark:text-purple-600">
              DevOps
            </span>{" "}
            Engineer. I'm passionate about continuous learning and building
            reliable, efficient solutions.
          </p>
          <div className="">
            <div className="flex items-center gap-2">
              <LocationIcon className="text-slate-500 dark:text-slate-200 size-5" />
              <p>San José, Costa Rica</p>
            </div>
            <div className="flex items-center gap-2">
              <AvailableIcon className="text-green-600 dark:text-green-400 size-5" />
              <p>Available for new projects</p>
            </div>
          </div>
          <SocialMediaList />
        </div>

        <div className="flex items-center justify-center w-full animate-fade-up animate-once md:animate-fade-left">
          <img
            className="object-cover w-[70%] md:w-auto rounded-[50%] max-w-xs shadow-2xl shadow-slate-300 dark:shadow-slate-900"
            src="/img/me.jpg"
            alt="Me"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};
