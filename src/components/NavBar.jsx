import { useState } from "react";

import { DarkModeButton } from "./";
import { CloseIcon, HamburguerMenu } from "../assets";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false); // Navigation

  const links = [
    { id: 1, title: "Home", target: "home" },
    { id: 2, title: "About", target: "about" },
    { id: 3, title: "Projects", target: "projects" },
    { id: 4, title: "Testimonials", target: "testimonials" },
    { id: 5, title: "Contact", target: "contact" },
  ];

  const handleNavBar = () => {
    setShowMenu(!showMenu);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setShowMenu(false); // Close the navbar menu after clicking on a link
    }
  };

  return (
    <div className="flex items-center justify-between py-4">
      <a onClick={(e) => handleNavLinkClick(e, "home")} href="">
        <h1 className="text-3xl font-bold text-blue-500 dark:text-white ">
          {"<BGC />"}
        </h1>
      </a>

      <nav
        className={`absolute w-[80%] h-screen top-0 right-0 bg-slate-200 dark:bg-slate-900 p-4 md:block md:static md:w-auto md:h-auto md:p-0 md:bg-white md:dark:bg-slate-950 md:animate-fade ${
          showMenu ? "animate-fade-left" : "hidden"
        }`}
      >
        <header className="flex items-center justify-between pb-4 border-b border-slate-500 md:hidden">
          <h1 className="text-2xl font-semibold">{"<BGC />"}</h1>
          <button className="size-5" onClick={handleNavBar}>
            <CloseIcon />
          </button>
        </header>

        <ul className="py-4 space-y-4 border-b bg-slate-200 md:bg-white dark:bg-slate-900 dark:md:bg-slate-950 border-slate-500 md:flex md:py-0 md:space-y-0 md:gap-4 md:border-0">
          {links?.map((link) => (
            <li key={link.id}>
              <a
                className="block"
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
          <button
            className="w-full p-2 font-medium bg-white shadow-sm rounded-xl dark:hover:bg-slate-200 dark:text-slate-950"
            onClick={handleNavBar}
          >
            Download CV
          </button>
        </div>
      </nav>

      <div className="items-center gap-4 md:flex">
        <button className="md:hidden size-6" onClick={handleNavBar}>
          <HamburguerMenu />
        </button>
        <div className="hidden md:block size-6">
          <DarkModeButton />
        </div>
        <button
          className="hidden px-4 py-1 font-medium duration-200 bg-white shadow-sm md:block rounded-xl hover:bg-slate-300 dark:hover:bg-slate-200 dark:text-slate-950"
          onClick={handleNavBar}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
