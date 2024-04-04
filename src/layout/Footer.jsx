import { Copy, Letter, Phone } from "../assets";
import { Heading, SocialMediaList } from "../components";
import { useCopyText } from "../hooks/useCopyText";

export const Footer = () => {
  const { copyToCipboard } = useCopyText();
  return (
    <footer id="contact" className="pt-10">
      <Heading
        title="Get in touch"
        subtitle="Feel free to reach out to me if you're looking for a developer or simply want to connect."
      />

      <div className="mycontainer">
        <div className="pb-5 mt-10 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-6">
              <Letter />
            </div>
            <p className="font-bold">brangmz20@gmail.com</p>
            <div
              className="duration-200 cursor-pointer size-5 hover:scale-105"
              onClick={() => copyToCipboard("brangmz20@gmail.com")}
            >
              <Copy />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="size-6">
              <Phone />
            </div>
            <p className="font-bold">+506 70428451</p>
            <div
              className="duration-200 cursor-pointer size-5 hover:scale-105"
              onClick={() => copyToCipboard("+506 70428451")}
            >
              <Copy />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="mb-2 font-light">
              You may also find me in these platforms!
            </p>
            <SocialMediaList />
          </div>
        </div>
      </div>
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
          👋
        </p>
      </div>
    </footer>
  );
};
