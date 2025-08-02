import { dijkstra } from "../utils/graphUtils.js";

export const getPath = (req, res) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res.status(400).json({ error: "Source and destination required." });
  }

  try {
    const result = dijkstra(source, destination);
    if (!result.path.length) {
      return res.status(404).json({ error: "Path not found." });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
};
