import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const graphPath = path.join(__dirname, "../data/graph_full.json");

const graphData = JSON.parse(fs.readFileSync(graphPath, "utf8"));

export function dijkstra(start, end) {
  const distances = {};
  const visited = {};
  const prev = {};
  const queue = new Set(Object.keys(graphData));

  Object.keys(graphData).forEach((node) => {
    distances[node] = Infinity;
    prev[node] = null;
  });
  distances[start] = 0;

  while (queue.size) {
    const current = [...queue].reduce((minNode, node) =>
      distances[node] < distances[minNode] ? node : minNode
    );

    queue.delete(current);
    visited[current] = true;

    for (let neighbor in graphData[current]) {
      const alt = distances[current] + graphData[current][neighbor];
      if (alt < distances[neighbor]) {
        distances[neighbor] = alt;
        prev[neighbor] = current;
      }
    }
  }

  const path = [];
  let node = end;
  while (node) {
    path.unshift(node);
    node = prev[node];
  }

  return {
    path,
    distance: distances[end] !== Infinity ? distances[end] : null,
  };
}
