import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm";
import PathDisplay from "../components/PathDisplay";

function PathFinder() {
  const { floor } = useParams();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [pathData, setPathData] = useState(null);
  const [error, setError] = useState(null);

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

  const floorNumber = floor?.replace("floor", "") || "1";
  const floorImage = `/images/floor${floorNumber}.jpg`;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          CMRIT Floor {floorNumber} Navigation
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

      <div className="mt-10 w-full max-w-4xl mx-auto">
        <img
          src={floorImage}
          alt={`Floor ${floorNumber} Map`}
          className="w-full h-auto object-contain rounded-lg shadow"
        />
      </div>
    </div>
  );
}

export default PathFinder;
