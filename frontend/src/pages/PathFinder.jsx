// PathFinder.jsx
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
    <div className="container">
      <header>
        <h1>CMRIT Floor Navigation System</h1>
      </header>

      <div className="left-section">
        <h2>Path Finder</h2>
        <form id="searchForm" onSubmit={handleSubmit}>
          <label htmlFor="source"><b>Source:</b></label><br />
          <input type="text" id="source" name="source" value={source} onChange={(e) => setSource(e.target.value)} /><br />
          <label htmlFor="destination"><b>Destination:</b></label><br />
          <input type="text" id="destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} /><br /><br />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="path-container">
        <h3>Path from Source to Destination:</h3>
        <ul id="pathList">
          {error && <li>{error}</li>}
          {pathData && (
            <>
              <li>Path: {pathData.path.join(" --> ")}</li>
              <li>Distance: {pathData.distance} meters</li>
            </>
          )}
        </ul>
      </div>

      <div className="image-container">
        <div className="slider" ref={sliderRef}>
          <img src="/images/floor.png" alt="Map Image 1" />
          <img src="/images/floor1.jpg" alt="Map Image 2" />
          <img src="/images/floor3.jpg" alt="Map Image 3" />
        </div>
        <button className="prev" onClick={() => setCurrentIndex(currentIndex - 1)}>&laquo;</button>
        <button className="next" onClick={() => setCurrentIndex(currentIndex + 1)}>&raquo;</button>
      </div>
    </div>
  );
}

export default PathFinder;
