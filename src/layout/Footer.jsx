import { Heading, SocialMediaList } from "../components";

export const Footer = () => {
  return (
    <footer className="py-10">
      <Heading
        title="Get in touch"
        subtitle="Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
      />

      <div className="mycontainer">
        <div className="mt-8 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <img className="size-5" src="/icons/letter.svg" alt="icon" />
            <p className="font-bold">brangmz20@gmail.com</p>
            <img className="size-5" src="/icons/copy.svg" alt="icon" />
          </div>

          <div className="flex items-center justify-center gap-2">
            <img className="size-5" src="/icons/phone.svg" alt="icon" />
            <p className="font-bold">+506 70428451</p>
            <img className="size-5" src="/icons/copy.svg" alt="icon" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="font-light">
              You may also find me in these platforms!
            </p>
            <SocialMediaList />
          </div>
        </div>
      </div>
    </footer>
  );
};
