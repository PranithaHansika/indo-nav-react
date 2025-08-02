import { useState } from "react";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import PathDisplay from "../components/PathDisplay";
import ImageSlider from "../components/ImageSlider";

function PathFinder() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [pathData, setPathData] = useState(null);
  const [error, setError] = useState(null);
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          CMRIT Floor Navigation System
        </h1>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Path Finder
          </h2>
          <SearchForm
            source={source}
            destination={destination}
            setSource={setSource}
            setDestination={setDestination}
            handleSubmit={handleSubmit}
          />
        </div>
        <PathDisplay error={error} pathData={pathData} />
      </div>

      <ImageSlider
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default PathFinder;
