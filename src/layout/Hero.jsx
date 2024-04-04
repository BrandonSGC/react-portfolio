import { Location } from "../assets";
import { SocialMediaList } from "../components";

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-6 lg:col-start-1 lg:col-end-3">
        <h2 className="text-3xl font-bold md:text-6xl">
          Hi, I'm Brandon <span className="inline-block">👋</span>
        </h2>
        <p className="text-balance">
          I'm a full-stack web developer (React.js & Node.js) with a focus on
          creating beautiful, responsive, fast and accessible websites. I've
          been loving programming since I started, so let's bring your digital
          vision to life!
        </p>

        <div>
          <div className="flex items-center gap-2">
            <div className="size-5">
              <Location />
            </div>
            <p>San José, Costa Rica</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-500 rounded-full size-4"></div>
            <p>Available for new projects</p>
          </div>
        </div>

        <SocialMediaList />
      </div>

      <div>
        <img src="/img/programmer.svg" alt="Me" />
      </div>
    </div>
  );
};
