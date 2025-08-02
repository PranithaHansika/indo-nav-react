function PathDisplay({ error, pathData }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Path Result:</h3>
      <ul className="list-disc pl-5 text-gray-700">
        {error && <li className="text-red-600">{error}</li>}
        {pathData && (
          <>
            <li>
              <strong>Path:</strong> {pathData.path.join(" ➝ ")}
            </li>
            <li>
              <strong>Distance:</strong> {pathData.distance} meters
            </li>
          </>
        )}
        {!error && !pathData && <li>No path calculated yet.</li>}
      </ul>
    </div>
  );
}

export default PathDisplay;
