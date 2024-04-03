export const useCopyText = () => {
  const copyToCipboard = (textToCopy) => {
    try {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    copyToCipboard,
  };
};
