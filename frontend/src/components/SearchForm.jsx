function SearchForm({ source, destination, setSource, setDestination, handleSubmit }) {
  return (
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
  );
}

export default SearchForm;
