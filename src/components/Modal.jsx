import { CloseIcon } from "../assets";

export const Modal = ({ handleOpen, children }) => {
  return (
    <div className="fixed w-[90%] mx-auto inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="z-50 p-6 bg-white rounded-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={handleOpen}
          >
            <CloseIcon />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
