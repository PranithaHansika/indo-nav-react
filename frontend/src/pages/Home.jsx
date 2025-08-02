import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">IndoNav Home Page</h1>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/floor1")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Floor 1
        </button>
        <button
          disabled
          className="px-6 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
        >
          Floor 2
        </button>
        <button
          disabled
          className="px-6 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed"
        >
          Floor 3
        </button>
      </div>
    </div>
  );
}

export default Home;
