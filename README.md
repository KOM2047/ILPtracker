# Integral Life Practice (ILP) Tracker

A minimal, privacy-focused web application designed to help you track and maintain a balanced integral practice across Body, Mind, Spirit, and Shadow.

## Project Goals
-   **Holistic Tracking**: Monitor daily practices across multiple dimensions of life, not just physical exercise.
-   **Customization**: Allow users to design their own modules and schedule practices for specific days (e.g., Yoga on Mon/Wed/Fri).
-   **Privacy First**: All data is stored locally in your browser (`localStorage`). No accounts, no servers, no tracking.
-   **Simplicity**: A single-file application that works offline and requires no installation.

## Features
-   **Daily Tracker**: Smart dashboard that only shows practices scheduled for the current day.
-   **Design Mode**: Create custom modules, add practices, and configure specific weekly schedules.
-   **History & Export**: Visualize your completion streaks and export weekly logs as text files for backup.
-   **Dark Mode**: Native support for light and dark themes.

## Tech Stack
-   **Core**: HTML5, Vanilla JavaScript (ES6+)
-   **Styling**: Tailwind CSS (via CDN)
-   **Storage**: Browser LocalStorage
-   **Deployment**: Zero-build; runs directly in the browser.

## How to Run

### Method 1: Direct Open (Easiest)
Simply double-click `index.html` to open it in your default web browser.

### Method 2: Local Server (Recommended)
For the best experience (preventing CORS issues with some browser extensions), serve the folder locally:

**Using Python:**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000/index.html`

**Using VS Code:**
Install the "Live Server" extension, right-click `index.html`, and select "Open with Live Server".
