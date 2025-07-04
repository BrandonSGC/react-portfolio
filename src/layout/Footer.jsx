import { LetterIcon, PhoneIcon } from "../assets";
import { Heading, SocialMediaList, CopyButton, Container } from "../components";

export const Footer = () => {
  return (
    <footer id="contact" className="pt-10 bg-slate-100 dark:bg-slate-950">
      <Heading
        title="Get in touch"
        subtitle="Feel free to reach out to me if you're looking for a developer or simply want to connect"
      />

      <Container>
        <div className="pb-5 mt-6 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <LetterIcon className="size-6 text-slate-600 dark:text-slate-300" />
            <p className="font-medium">brangmz20@gmail.com</p>
            <div className="relative duration-200 cursor-pointer hover:scale-105">
              <CopyButton text="brangmz20@gmail.com" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <PhoneIcon className="size-6 text-slate-600 dark:text-slate-300" />
            <p className="font-medium">+506 70428451</p>
            <div className="duration-200 cursor-pointer hover:scale-105">
              <CopyButton text="+506 70428451" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="mb-2 font-light">
              You can also find me in these platforms!
            </p>
            <SocialMediaList />
          </div>
        </div>
      </Container>

      <div className="bg-slate-200 dark:bg-slate-900">
        <p className="py-5 text-sm font-light text-center">
          <span className="pr-3 mr-2 border-r border-slate-400 dark:border-slate-300">
            &copy; 2024
          </span>{" "}
          Coded by{" "}
          <a
            className="border-b border-slate-500 hover:text-slate-800 hover:dark:text-slate-300"
            href="https://github.com/BrandonSGC"
            target="_blank"
          >
            Brandon Gomez Carvajal
          </a>
          <span className="inline-block ml-1 animate-wiggle-more animate-infinite">
            👋🏼
          </span>
        </p>
      </div>
    </footer>
  );
};
