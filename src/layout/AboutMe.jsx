import { Container, Heading } from "../components";

export const AboutMe = () => {
  return (
    <section id="about" className="py-10 bg-slate-100 dark:bg-slate-800">
      <Heading title="About Me" />
      <Container className="flex flex-col grid-cols-2 gap-4 md:grid">
        <div className="flex items-center justify-center p-2">
          <img className="max-w-96" src="/img/development.svg" alt="" />
        </div>

        <div className="my-10 space-y-5">
          <h3 className="text-4xl font-semibold ">
            Do you want to know more about me?
          </h3>
          <p>
            I'm a junior Fullstack Web Developer, deeply passionate about programming,
            specializing in full-stack development with React.js & Node.js. I
            Prioritize user experience, and writing clean, highly performant
            code.
          </p>
          <p>
            I started my journey into programming at the age of 20 at{" "}
            <a
              className="underline text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-300"
              href="https://www.cuc.ac.cr/"
              target="_blank"
            >
              Colegio Universitario de Cartago
            </a>{" "}
            in 2020.
          </p>
        </div>
      </Container>
    </section>
  );
};
