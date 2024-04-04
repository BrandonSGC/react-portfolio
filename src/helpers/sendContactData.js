export const sendContactData = async ( formData ) => {
  try {
    const url = "http://localhost:3000/contact";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('An error has occured while sending the contact data', error);
  }
}