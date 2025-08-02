import { useState, useRef, useEffect } from "react";
import axios from "axios";

function PathFinder() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [pathData, setPathData] = useState(null);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/get_path", {
        source,
        destination,
      });
      setPathData(response.data);
      setError(null);
    } catch (err) {
      const errMsg = err.response?.data?.error || "Error fetching path";
      setError(errMsg);
      setPathData(null);
    }
  };

  const showSlide = (index) => {
    const images = sliderRef.current.children;
    if (!images.length) return;
    const newIndex = index >= images.length ? 0 : index < 0 ? images.length - 1 : index;
    setCurrentIndex(newIndex);
    sliderRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
  };

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">CMRIT Floor Navigation System</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Path Finder</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="source" className="block font-semibold mb-1">Source:</label>
              <input
                type="text"
                id="source"
                name="source"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="destination" className="block font-semibold mb-1">Destination:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Search
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Path from Source to Destination:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {error && <li className="text-red-600">{error}</li>}
            {pathData && (
              <>
                <li>Path: {pathData.path.join(" --> ")}</li>
                <li>Distance: {pathData.distance} meters</li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-10 relative overflow-hidden w-full max-w-4xl mx-auto">
        <div ref={sliderRef} className="flex transition-transform duration-300 ease-in-out">
          <img src="/images/floor.png" alt="Map 1" className="w-full h-96 object-contain" />
          <img src="/images/floor1.jpg" alt="Map 2" className="w-full h-96 object-contain" />
          <img src="/images/floor3.jpg" alt="Map 3" className="w-full h-96 object-contain" />
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
    </div>
  );
}

export default PathFinder;
