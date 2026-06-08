const express = require("express");
const spots = require("./data/spots");
const { renderHome, renderSpot, renderNotFound } = require("./views/pages");

const PORT = 3000;
const app = express();

// 1. Serve static files from public/
app.use(express.static("public"));

// 2. Home — all spots as clickable cards
app.get("/", (req, res) => {
  res.send(renderHome(spots));
});

// 3. Spot detail by id
app.get("/spots/:id", (req, res) => {
  const spot = spots.find((s) => s.id === req.params.id);
  if (!spot) {
    return res.status(404).send(renderNotFound());
  }
  res.send(renderSpot(spot));
});

// 4. Catch-all 404 (Express 5: use middleware, not app.get("*"))
app.use((req, res) => {
  res.status(404).send(renderNotFound());
});

// 6. Start
app.listen(PORT, () => {
  console.log("🍜 Server running on http://localhost:3000");
});
