function PathDisplay({ error, pathData }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">
        Path from Source to Destination:
      </h3>
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
  );
}

export default PathDisplay;
