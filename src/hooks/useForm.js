import { useState } from "react";

export const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormData(initialData);
  }

  return {
    ...formData,
    formData,
    onInputChange,
    onResetForm,
  };
};
