# Integral Life Practice (ILP) Tracker

**Evolutionary. Holistic. Interconnected.**

A privacy-focused, glassmorphic Progressive Web App (PWA) designed to help you cultivate a balanced Integral Practice across **Body, Mind, Spirit, and Shadow**. Built for the modern "Second Tier" practitioner, this tool visualizes your holistic growth through a dynamic AQAL-inspired interface.

![Mandala Progress](https://placehold.co/600x400?text=Mandala+Visual+Concept)

---

## 🌟 The Integral Vision

This is not just a habit tracker; it is a **Holon**. It treats your daily practices not as isolated tasks but as interconnected movements toward wholeness.

*   **AQAL Framework**: Organize your life into the four primary quadrants: Body (Behavioral), Mind (Intentional), Shadow (Cultural/Emotional), and Spirit (Social/Systemic).
*   **Transcend & Include**: Watch your modules "elevate" with a glowing aura as you complete them, signifying their integration into a higher order of being.
*   **Cosmic Mandala**: A central, living progress ring that visualizes your daily journey from fragmentation to unity.
*   **Integral Aesthetics**: A custom "Teal" design system utilizing deep glassmorphism, parallax gradients, and intuitive iconography.

## ✨ Key Features

*   **Daily Holarchy**: A smart dashboard that renders only the specific practices scheduled for "today," reducing cognitive load.
*   **Journaling & Reflection**: dedicated journaling tab to document your insights, integrated directly with your daily practice logs.
*   **Architect Mode**: Fully customizable. Design your own modules, specific practices, and granular weekly schedules (e.g., *Yoga on Mon/Wed/Fri*).
*   **Evolutionary History**: Weekly visualizations of your practice consistency and journal entries.
*   **Progressive Web App (PWA)**: Installable on mobile and desktop devices. Works offline with full caching capabilities.
*   **Privacy First**: **100% Client-Side**. Your data lives in your browser's `Local Storage`. No clouds, no accounts, no surveillance.
*   **Responsive**: Fluid design that adapts from desktop "Command Centers" to mobile "Companion" views.

## 🛠️ Tech Stack

Built with a commitment to **simplicity and elegance**:

*   **Structure**: Semantic HTML5
*   **Logic**: Modern Vanilla JavaScript (ES Module architecture)
*   **Style**: Bootstrap 5.3 + Custom "Integral Design System" (CSS Variables & Glassmorphism)
*   **PWA**: Service Worker caching & Manifest
*   **Icons**: Bootstrap Icons (v1.11)
*   **Type**: Inter (Google Fonts)

## 🚀 Getting Started

No installation required. This is a zero-dependency web app.

### Method 1: The Direct Path
Simply open `index.html` in your modern web browser (Chrome, Edge, Firefox, Brave).

### Method 2: PWA Installation
1.  Open the app in Chrome or Edge.
2.  Click the "Install" icon in the address bar (or "Add to Home Screen" on mobile).
3.  Launch the app from your desktop/home screen like a native application.

### Method 3: The Developer Path
To ensure the best experience (and verify offline caching), serve the folder via a local server:

1.  **Python**:
    ```bash
    python -m http.server 8000
    ```
2.  **Node/NPM**:
    ```bash
    npx serve .
    ```

Then navigate to `http://localhost:8000`.

## 📂 Project Structure

```text
/
├── index.html      # The structural skeleton
├── style.css       # The "Integral Design System" (Styling & Theme)
├── app.js          # The application brain (State, Logic, Renderer)
├── sw.js           # Service Worker (Offline Caching)
├── manifest.json   # PWA Configuration
└── README.md       # You are here
```

---

*" The whole is greater than the sum of its parts."*
