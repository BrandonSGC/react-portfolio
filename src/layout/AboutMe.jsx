export const AboutMe = () => {
  return (
    <div className="flex flex-col grid-cols-2 gap-4 md:grid">
      <div className="flex items-center justify-center p-2">
        <img className="max-w-96" src="/img/development.svg" alt="" />
      </div>

      <div className="my-10 space-y-5">
        <h3 className="text-4xl font-semibold ">
          Curious about me? Here you have it:
        </h3>
        <p>
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.
        </p>
        <p>
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
      </div>
    </div>
  );
};
