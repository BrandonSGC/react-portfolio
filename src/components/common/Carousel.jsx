import { useEffect, useState } from "react";

export const Carousel = ({
  images = [],
  showButtons = false,
  autoPlay = false,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        next();
      }, 1800);

      return () => clearInterval(interval);
    }
  }, [selectedIndex]);

  const previous = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(images.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const next = () => {
    if (selectedIndex === images.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <img
        className="duration-200 rounded-xl hover:scale-105"
        src={`/img/${images[selectedIndex]}`}
        alt="Carousel Image"
        loading="lazy"
      />

      {showButtons && (
        <>
          <button
            className="absolute px-3 py-1 text-black left-2 top-[45%] bg-white opacity-25 rounded-full"
            onClick={previous}
          >
            {"<"}
          </button>
          <button
            className="absolute px-3 py-1 text-black right-2 top-[45%] bg-white opacity-25 rounded-full"
            onClick={next}
          >
            {">"}
          </button>
        </>
      )}
    </div>
  );
};
