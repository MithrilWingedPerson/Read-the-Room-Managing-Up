# Read the Room: Managing Up — Version 0.2

A free, static HTML/CSS/JavaScript workplace practice game designed for GitHub Pages.

## Files

- `index.html` — page structure
- `styles/main.css` — visual styling
- `scripts/scenarios.js` — scenario content, choices, feedback and takeaways
- `scripts/app.js` — game navigation, attempt handling, feedback and local progress
- `README.md` — setup notes

## Publish on GitHub Pages

Repository settings → Pages → Build and deployment:
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

## Important scope notes

- No paid AI API, server, account system or external database is used.
- Structured-choice feedback is rule-based. Free-text responses are not automatically assessed by AI or by keyword matching.
- Progress is stored in the browser's local storage where available. It may not persist across browsers, devices, private sessions or cleared browser data.
- The game is a practice simulation, not proof of workplace competence.
- Manager characters are fictional.
- Voice input is not included in this version.
- The game is designed to be usable with keyboard and touch, but should still be tested with assistive technology and on target devices before public portfolio release.

## Updating

Upload the files to the matching paths in the repository and commit to `main`. Keep the folder structure exactly as shown above.
