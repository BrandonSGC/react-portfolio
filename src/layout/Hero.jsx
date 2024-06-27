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
            I'm a <span className="font-medium">Fullstack Web Developer</span>{" "}
            specializing in (
            <span className="font-bold text-blue-400 dark:text-blue-300">
              React.js
            </span>{" "}
            &{" "}
            <span className="font-bold text-green-500 dark:text-green-600">
              Node.js
            </span>{" "}
            ) with a focus on creating responsive and high-performance websites
            and web applications. Based in San José, Costa Rica, I'm eager to
            collaborate on new projects and bring innovative ideas to life.
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
          />
        </div>
      </Container>
    </section>
  );
};
