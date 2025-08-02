import express from "express";
import { dijkstra } from "../utils/graphUtils.js";

const router = express.Router();

router.post("/get_path", (req, res) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res
      .status(400)
      .json({ error: "Source and destination are required" });
  }

  try {
    const { path, distance } = dijkstra(source, destination);

    if (!path) {
      return res
        .status(404)
        .json({ error: "No path found between the selected rooms." });
    }

    return res.status(200).json({ path, distance });
  } catch (error) {
    console.error("Path finding error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
