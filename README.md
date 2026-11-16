# Read the Room: Managing Up — Prototype 0.1

This is the first working shell for the game. It includes:
- Responsive home page
- Navigation between Home, Challenges and Quick Guide
- Six challenge cards
- Challenge information dialog
- Basic visual theme and mobile navigation

The challenge cards are placeholders. The scenarios, attempt limits, branching, assessment, player templates, voice input and final reflection will be added in later build stages.

## Run locally
Open `index.html` in a modern browser.

## Publish with GitHub Pages
1. Create a new GitHub repository named `read-the-room`.
2. Upload the contents of this folder (not the containing folder itself).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The published URL will appear in the Pages settings.

## Edit safely
- `index.html` contains the page structure.
- `styles/main.css` contains the design.
- `scripts/app.js` contains navigation and challenge-card behaviour.
- Future scenario content will be kept separate from the game engine.

This prototype does not store player progress or personal data.
