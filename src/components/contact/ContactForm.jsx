import { useForm } from "../../hooks/useForm";
import { sendContactData } from "../../helpers";
import { Alert } from "..";
import { useAlert } from "../../hooks/useAlert";

export const ContactForm = () => {
  const { formData, onInputChange, onResetForm } = useForm({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const { alert, showAlert } = useAlert();

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      formData.name.trim() === "" ||
      formData.surname.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      showAlert("error", "Debe llenar los campos correctamente.");
      return;
    }

    const { type, message } = await sendContactData(formData);
    showAlert(type, message);

    // ResetForm
    onResetForm();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="p-6 space-y-2 rounded-lg text-slate-800"
    >
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
            placeholder="Name"
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
            placeholder="Surname"
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
          placeholder="email@example.com"
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
          placeholder="Write your message"
          onChange={onInputChange}
          value={formData.message}
        ></textarea>
      </div>

      <Alert show={alert.show} type={alert.type} message={alert.message} />

      <button className="block w-full p-2 font-medium text-white duration-200 rounded bg-slate-500 hover:bg-slate-600">
        Send
      </button>
    </form>
  );
};
