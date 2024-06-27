import { useState } from "react";
import { CloseIcon, HamburgerMenuIcon } from "../../assets";
import { DarkModeButton } from "..";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { id: 1, title: "Home", target: "home" },
    { id: 2, title: "Skills", target: "skills" },
    { id: 3, title: "Projects", target: "projects" },
    // { id: 4, title: "Education", target: "education" },
    { id: 5, title: "Experience", target: "experience" },
    { id: 6, title: "Contact", target: "contact" },
  ];

  const handleNavBar = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false);
    }
  };

  return (
    <div className="flex items-center justify-between py-4">
      <a onClick={(e) => handleNavLinkClick(e, "home")} href="">
        <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text md:text-3xl">
          {"<BGC />"}
        </h1>
      </a>

      <nav
        className={`absolute w-[80%] bg-slate-200 dark:bg-slate-900 h-screen top-0 right-0 shadow md:shadow-none p-4 md:bg-white/0 md:dark:bg-slate-900/0 md:block md:static md:w-auto md:h-auto md:p-0 md:animate-fade ${
          showMenu ? "animate-fade-left" : "hidden"
        }`}
      >
        <header className="flex items-center justify-between pb-4 border-b border-slate-500 md:hidden">
          <h1 className="text-2xl font-semibold">{"<BGC />"}</h1>
          <button onClick={handleNavBar}>
            <CloseIcon className="size-6 text-slate-600 dark:text-slate-300" />
          </button>
        </header>

        <ul className="flex flex-col gap-2 py-4 border-b md:gap-0 border-b-slate-500 md:py-0 md:flex-row md:border-0">
          {links?.map((link) => (
            <li key={link.id}>
              <a
                className="block p-2 duration-200 rounded hover:bg-slate-300 dark:hover:bg-slate-950 md:hover:bg-slate-200 md:dark:hover:bg-slate-900"
                onClick={(e) => handleNavLinkClick(e, link.target)}
                href="#"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <div className="flex items-center justify-between my-4">
            <p className="font-light ">Switch Theme</p>
            <DarkModeButton />
          </div>
          <a
            className="w-full p-2 font-medium bg-white shadow-sm rounded-xl dark:hover:bg-slate-200 dark:text-slate-950"
            onClick={handleNavBar}
            href="/Resume.pdf"
            download="Resume.pdf"
          >
            Download CV
          </a>
        </div>
      </nav>

      <div className="items-center gap-2 md:flex">
        <button className="md:hidden" onClick={handleNavBar} aria-label="menu">
          <HamburgerMenuIcon className="size-6" />
        </button>
        <div className="hidden md:block size-6">
          <DarkModeButton />
        </div>
        <a
          className="hidden px-3 py-1 font-medium duration-200 shadow text-slate-800 bg-slate-200 md:block rounded-xl hover:bg-slate-300 "
          onClick={handleNavBar}
          href="/Resume.pdf"
          download="Resume.pdf"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
