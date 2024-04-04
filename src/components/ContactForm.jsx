export const ContactForm = () => {
  return (
    <div className="mx-auto">
      <form className="space-y-2 rounded-lg text-slate-800">
        <legend className="mb-4 text-4xl font-black text-center">
          Contact Form
        </legend>
        <fieldset className="grid grid-cols-2 gap-4">
          <div>
            <label className="block" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="w-full px-2 py-1 rounded-md bg-slate-200"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div>
            <label className="block" htmlFor="surname">
              Surname:{" "}
            </label>
            <input
              className="w-full px-2 py-1 rounded-md bg-slate-200"
              type="text"
              name="surname"
              id="surname"
            />
          </div>
        </fieldset>

        <div>
          <label className="block" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="w-full px-2 py-1 rounded-md bg-slate-200"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div>
          <label className="block" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full h-32 p-2 rounded-md bg-slate-200"
            name="message"
            id="message"
          ></textarea>
        </div>

        <button className="block w-full p-2 font-medium text-white duration-200 bg-slate-500 hover:bg-slate-600">
          Send Data
        </button>
      </form>
    </div>
  );
};
