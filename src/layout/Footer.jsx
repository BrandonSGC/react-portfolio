import { LetterIcon, PhoneIcon } from "../assets";
import { ContactForm, Heading, Modal, SocialMediaList, CopyButton } from "../components";
import { useModal } from "../hooks/useModal";

export const Footer = () => {
  const { isOpen, toggleModal } = useModal();

  return (
    <footer id="contact" className="pt-10">
      <Heading
        title="Get in touch"
        subtitle="Feel free to reach out to me if you're looking for a developer or simply want to connect."
      />

      <div className="mycontainer">
        <div className="pb-5 mt-6 space-y-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <LetterIcon className="size-6 text-slate-600 dark:text-slate-300" />
            <p className="font-bold">brangmz20@gmail.com</p>
            <div className="relative duration-200 cursor-pointer hover:scale-105">
              <CopyButton text="brangmz20@gmail.com" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <PhoneIcon className="size-6 text-slate-600 dark:text-slate-300" />
            <p className="font-bold">+506 70428451</p>
            <div className="duration-200 cursor-pointer hover:scale-105">
              <CopyButton text="+506 70428451" />
            </div>
          </div>

          <button
            className="px-3 py-1 font-medium text-white rounded-lg bg-slate-500 hover:bg-slate-600 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-700"
            onClick={toggleModal}
          >
            Open Contact Form
          </button>

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
          <span className="inline-block ml-1 animate-wiggle-more animate-infinite">
            👋
          </span>
        </p>
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} toggleModal={toggleModal}>
          <ContactForm />
        </Modal>
      )}
    </footer>
  );
};
