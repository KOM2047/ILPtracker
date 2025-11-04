# ILPtracker

A minimal single-file web project. This repository currently contains a single HTML file, `ilptracker.html`, which appears to be the primary application artifact.

## What this is

ILPtracker is provided as a self-contained HTML file intended to be opened in a web browser. It appears to be a small web app; this README documents how to run and develop it locally.

## Project details (extracted from `ilptracker.html`)

Below are concrete details pulled from the current `ilptracker.html` source so you don't have to hunt through the file.

- Title: "Integral Life Practice Tracker" (document title / UI reads "Integral Life Practice (Local)").
- Tech: Single-file web app using Tailwind CSS (via CDN) and the Inter Google Font.
- Runtime: Pure browser app. The page imports Firebase Auth modules but data persistence is implemented in browser `localStorage` by default. Firestore is intentionally not used in the current source.
- Auth: The app attempts to initialize Firebase Auth and will sign in anonymously or with a provided custom token, but it falls back to a local fixed ID (`local-user-session`) on error or when Firebase is not configured.
- Optional environment inputs the app looks for (can be injected by a hosting/container environment):
  - `__app_id` — optional app identifier (defaults to `ilp-default-app`).
  - `__firebase_config` — optional JSON string containing Firebase configuration (if present the app calls `initializeApp`).
  - `__initial_auth_token` — optional custom auth token to call `signInWithCustomToken`.
- Default data model and behavior:
  - Default modules are provided: Body, Mind, Spirit, Shadow (with default practices such as Yoga, Meditation, Journaling, etc.).
  - Module completion rules: each module has a `completionRule` of either `all` (default) or `choose_one` (satisfy one practice).
  - Daily logs are stored in `localStorage` under a single key wrapper. Keys used by the app are (per-user):
    - `ilp_config_{userId}` — stores configuration object { modules: [...] } and metadata.
    - `ilp_all_logs_{userId}` — stores history under a `logs` wrapper mapping date keys (YYYY-MM-DD) to `{ date, practices, updatedAt }` entries.

- UI features found:
  - Views: Daily Tracker (main), Design ILP (config), and History (past completion rates).
  - You can add / remove modules and practices and choose completion rules in the Design view.
  - Toggling practices updates today's log and persists to `localStorage` immediately.

- How to reset stored data (browser console):

  Open developer tools (F12) → Console, then run something like:

  ```javascript
  // Remove ILP data for the fallback local session
  localStorage.removeItem('ilp_config_local-user-session');
  localStorage.removeItem('ilp_all_logs_local-user-session');

  // Or list keys to find the active userId keys
  Object.keys(localStorage).filter(k => k.startsWith('ilp_'))
  ```

- Notes about remote persistence:
  - The file imports Firebase Auth but not Firestore; remote storage was intentionally left out and the app uses `localStorage` for portability.
  - To enable remote syncing, reintroduce Firestore imports (e.g., `getFirestore`, `doc`, `setDoc`, `onSnapshot`) and replace the localStorage reads/writes with calls to Firestore plus a security model.

Developer notes / small next steps

- The inline script is self-contained and works by opening the file, but splitting JS/CSS into `js/` and `css/` files will help maintainability and make testing easier.
- Consider adding a small `package.json` and a dev `npm` script that runs a local static server (or add a `.vscode/launch.json` task) for development convenience.
- Add a `LICENSE` if you plan to publish.


## Files

- `ilptracker.html` — main application file (single-file web app).

## Quick start

Open the project in one of these ways:

- Double-click `ilptracker.html` to open it in your default browser.
- Serve the folder with a simple local server (recommended for full feature support):

  - If you have Python 3 installed, from the project folder run:

    ```powershell
    python -m http.server 8000
    ```

    Then open http://localhost:8000/ilptracker.html in your browser.

  - Or use the VS Code Live Server extension and open `ilptracker.html`.

## Usage

Because this is a single HTML file, usage depends on how the app is implemented inside `ilptracker.html`. Try opening the file and interacting with the UI. If the app expects external data (files, API keys), check the top of `ilptracker.html` for comments or configuration placeholders.

## Development notes

- To iterate on the UI, edit `ilptracker.html` in your editor and refresh the browser.
- If you add JavaScript modules, stylesheets, or assets, keep them in a clear directory structure (e.g., `css/`, `js/`, `assets/`).
- Consider splitting large inline scripts into `js/` files for maintainability.

## Suggestions / Next steps

- Add a short description inside `ilptracker.html` (HTML comments or a README section) explaining the project's purpose, any external dependencies, and sample input data.
- If you want to publish the app, host the folder as static site (GitHub Pages, Netlify, Vercel).
- Add a license file (e.g., `LICENSE`) and CONTRIBUTING.md if you expect collaborators.

## License

This repository does not include a license file. If you want to open-source the project, consider adding an `LICENSE` (MIT, Apache-2.0, etc.).

---

If you'd like, I can: add a short project description inferred from comments in `ilptracker.html`, add a sample `index.html` wrapper or split scripts into separate files, or create a `LICENSE` file. Tell me which next step you'd like.

comment