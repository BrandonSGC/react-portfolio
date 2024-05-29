export const Alert = ({ show, type, message }) => {
  return (
    <>
      {show && (
        <p
          className={`
        p-1 font-medium text-center border-2 rounded 
        ${
          (type === "success" &&
            "text-green-600 bg-green-200  border-green-600") ||
          (type === "warning" &&
            "text-yellow-600 bg-yellow-200  border-yellow-600") ||
          (type === "error" && "text-red-600 bg-red-200  border-red-600")
        }`}
        >
          {message}
        </p>
      )}
    </>
  );
};
