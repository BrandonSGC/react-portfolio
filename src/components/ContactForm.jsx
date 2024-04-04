import { useForm } from "../hooks/useForm";
import { sendContactData } from "../helpers/";

export const ContactForm = () => {
  const { formData, onInputChange, onResetForm } = useForm({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      formData.name.trim() === "" ||
      formData.surname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      console.log("Debe llenar los campos correctamente.");
      return;
    }

    const result = await sendContactData(formData);

    // ResetForm
    onResetForm();
  };

  return (
    <div className="mx-auto">
      <form onSubmit={onSubmit} className="space-y-2 rounded-lg text-slate-800">
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
              onChange={onInputChange}
              value={formData.name}
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
              onChange={onInputChange}
              value={formData.surname}
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
            onChange={onInputChange}
            value={formData.email}
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
            onChange={onInputChange}
            value={formData.message}
          ></textarea>
        </div>

        {/* //TODO: Alert here */}

        <button className="block w-full p-2 font-medium text-white duration-200 bg-slate-500 hover:bg-slate-600">
          Send Data
        </button>
      </form>
    </div>
  );
};
