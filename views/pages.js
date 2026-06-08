// Page renderers for the El Paso Ramen Guide.

const { layout, escapeHtml } = require("./layout");

const SITE_TITLE = "El Paso Ramen Guide 🍜";

const renderCard = (spot) => `
    <a href="/spots/${encodeURIComponent(spot.id)}" class="ramen-card">
      <img src="${escapeHtml(spot.image_url)}" alt="${escapeHtml(spot.name)}">
      <div class="card-body">
        <h3>${escapeHtml(spot.name)}</h3>
        <small>${escapeHtml(spot.neighborhood)} · ${escapeHtml(spot.price_range)}</small>
      </div>
    </a>`;

const renderHome = (spots) => {
  const cards = spots.map(renderCard).join("\n");
  const content = `
    <header class="site-header">
      <h1>${escapeHtml(SITE_TITLE)}</h1>
      <p>The definitive guide to the best ramen in El Paso, Texas.</p>
    </header>
    <div class="ramen-grid">
${cards}
    </div>`;
  return layout(SITE_TITLE, content);
};

const renderSpot = (spot) => {
  const content = `
    <article class="spot-detail">
      <p><a href="/">← Back to Home</a></p>
      <img src="${escapeHtml(spot.image_url)}" alt="${escapeHtml(spot.name)}">
      <hgroup>
        <h1>${escapeHtml(spot.name)}</h1>
        <p>${escapeHtml(spot.neighborhood)} · ${escapeHtml(spot.price_range)}</p>
      </hgroup>
      <p>${escapeHtml(spot.description)}</p>
      <p><strong>Must try:</strong> <span class="must-try-badge">${escapeHtml(spot.must_try)}</span></p>
    </article>`;
  return layout(`${spot.name} — ${SITE_TITLE}`, content);
};

const renderNotFound = () => {
  const content = `
    <section class="not-found">
      <div class="not-found-emoji">🍜</div>
      <h1>404 — Page Not Found</h1>
      <p>Looks like this bowl slipped off the counter. We couldn't find what you were looking for.</p>
      <p><a href="/" role="button">← Back to Home</a></p>
    </section>`;
  return layout(`404 — ${SITE_TITLE}`, content);
};

module.exports = { renderHome, renderSpot, renderNotFound };
