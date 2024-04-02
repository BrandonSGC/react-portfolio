export const AboutMe = () => {
  return (
    <div className="flex flex-col grid-cols-2 gap-4 md:grid">
      <div className="flex items-center justify-center p-2">
        <img className="max-w-96" src="/img/development.svg" alt="" />
      </div>

      <div className="my-10 space-y-5">
        <h3 className="text-4xl font-semibold ">
          Do you want to know more about me?
        </h3>
        <p>
          I'm an aspiring junior developer deeply passionate about programming,
          specializing in full-stack development with React.js & Node.js. With
          an insatiable hunger for learning. I Prioritize user experience, and
          writing clean, highly performant code, I am dedicated to honing my
          skills and crafting innovative React.js and Node.js applications.
        </p>
        <p>
          I started my journey into programming at the age of 20 at{" "}
          <a
            className="underline duration-200 text-slate-700 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-500"
            href="https://www.cuc.ac.cr/"
            target="_blank"
          >
            Colegio Universitario de Cartago
          </a>{" "}
          in 2020. Fuelled by an insatiable curiosity and self-determination, I
          delved into the world of web development. I continuously expanding my
          skill set to build innovative solutions.
        </p>
      </div>
    </div>
  );
};
