import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-8 drop-shadow-md">
          IndoNav Home Page
        </h1>

        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/pathfinder/floor1")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Floor 1
          </button>
          <button
            onClick={() => navigate("/pathfinder/floor2")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Floor 2
          </button>
          <button
            onClick={() => navigate("/pathfinder/floor3")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Floor 3
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 bg-white shadow-inner text-sm text-gray-600">
        © {new Date().getFullYear()} IndoNav — All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
