import { useState } from "react";
import { CheckIcon, CopyIcon } from "../../assets";

export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (text === null) return;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div onClick={handleCopy}>
      {!isCopied ? (
        <CopyIcon className="size-6" />
      ) : (
        <CheckIcon className="text-green-500 size-6" />
      )}
    </div>
  );
};