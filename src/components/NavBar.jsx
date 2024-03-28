import { useState } from "react";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true); // Dark mode
  const [showMenu, setShowMenu] = useState(true); // Navigation

  if (darkMode) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavBar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between items-center py-2 ">
      <h1 className="font-semibold text-2xl">{"<BGC />"}</h1>

      <nav
        className={`absolute w-[80%] h-screen top-0 right-0 bg-slate-200 dark:bg-slate-900 p-4 md:block md:static md:w-auto md:h-auto md:p-0 md:bg-white md:dark:bg-slate-950 animate-fade-left animate-once ${
          showMenu ? "" : "hidden"
        }`}
      >
        <header className="flex justify-between items-center pb-4 border-b border-slate-500 md:hidden">
          <h1 className="font-semibold text-2xl">{"<BGC />"}</h1>
          <button onClick={handleNavBar}>X</button>
        </header>

        <ul className="py-4 border-b border-slate-500 space-y-4 md:flex md:py-0 md:space-y-0 md:gap-4 md:border-0">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>

        <div className="md:hidden">
          <div className="flex justify-between items-center my-4">
            <p className="font-light ">Switch Theme</p>
            <button onClick={handleDarkMode}>
              <img src="/icons/moon.svg" alt="" />
            </button>
          </div>
          <button
            className="p-2 font-medium w-full rounded-xl dark:hover:bg-slate-200 dark:bg-white dark:text-slate-950"
            onClick={handleNavBar}
          >
            Download CV
          </button>
        </div>
      </nav>

      <div className="md:flex gap-2">
        <button className="md:hidden" onClick={handleNavBar}>
          <img src="/icons/menu-hamburger.svg" alt="menu" />
        </button>

        <button className="hidden md:block" onClick={handleDarkMode}>
          <img src="/icons/moon.svg" alt="" />
        </button>
        <button
          className="hidden font-medium md:block py-1 px-3 rounded-xl dark:hover:bg-slate-200 dark:bg-white dark:text-slate-950"
          onClick={handleNavBar}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
