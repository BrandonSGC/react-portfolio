import { NavBar } from "./components/";
import { AboutMe, Hero } from "./layout/";

function App() {
  return (
    <>
      <header className="relative">
        <div className="mycontainer">
          <NavBar />
        </div>
      </header>

      <section className="py-20">
        <div className="mycontainer flex items-center">
          <Hero />
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-slate-800">
        <div className="mycontainer py-20">
          <div className="flex justify-center">
            <h3 className="text-center text-lg font-medium px-4 py-1 mb-5 rounded-3xl dark:bg-slate-700">
              About Me
            </h3>
          </div>
          <AboutMe />
        </div>
      </section>

      
    </>
  );
}

export default App;
