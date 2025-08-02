import { useRef, useEffect } from "react";

function ImageSlider({ currentIndex, setCurrentIndex }) {
  const sliderRef = useRef(null);

  const showSlide = (index) => {
    const images = sliderRef.current.children;
    if (!images.length) return;
    const newIndex =
      index >= images.length ? 0 : index < 0 ? images.length - 1 : index;
    setCurrentIndex(newIndex);
    sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  return (
    <div className="mt-10 relative overflow-hidden w-full max-w-4xl mx-auto">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 ease-in-out"
      >
        <img
          src="/images/floor.png"
          alt="Map 1"
          className="w-full h-96 object-contain"
        />
        <img
          src="/images/floor1.jpg"
          alt="Map 2"
          className="w-full h-96 object-contain"
        />
        <img
          src="/images/floor3.jpg"
          alt="Map 3"
          className="w-full h-96 object-contain"
        />
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-700"
        onClick={() => setCurrentIndex(currentIndex - 1)}
      >
        &laquo;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-2 rounded-full shadow hover:bg-blue-700"
        onClick={() => setCurrentIndex(currentIndex + 1)}
      >
        &raquo;
      </button>
    </div>
  );
}

export default ImageSlider;
