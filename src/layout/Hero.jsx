import { AvailableIcon, LocationIcon } from "../assets";
import { Container, SocialMediaList } from "../components";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-20 md:pt-44">
      <Container className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6 lg:col-start-1 lg:col-end-3 animate-fade-up animate-once md:animate-fade-right">
          <h2 className="text-3xl font-bold md:text-6xl">
            Hi, I'm Brandon{" "}
            <span className="inline-block animate-wiggle-more animate-infinite">
              👋
            </span>
          </h2>
          <p className="text-balance">
            I'm a full-stack web developer (
            <span className="font-medium text-blue-400 dark:text-blue-300">
              React.js
            </span>{" "}
            &{" "}
            <span className="font-medium text-green-500 dark:text-green-600">
              Node.js
            </span>{" "}
            ) with a focus on creating beautiful, responsive, fast and
            accessible websites. I've been loving programming since I started,
            so let's bring your digital vision to life!
          </p>

          <div>
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

        <div className="grid place-items-center animate-fade-up animate-once md:animate-fade-left">
          <img src="/img/programmer.svg" alt="Me" />
        </div>
      </Container>
    </section>
  );
};
