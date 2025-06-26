# 🧠 Google Form Auto-Filler – Humanized Script

This project is a **browser-based automation tool** that simulates human behavior to fill out multi-page Google Forms using JavaScript. The script uses **session-aware progress tracking**, randomized delays, and natural typing patterns to avoid detection while saving time.

---

## 🧠 Human-Like Automation Features

- ⏳ Random delays for reading, typing, and clicking.
- 🧠 Typing simulation (character-by-character with input events).
- 🎯 Scrolls elements into view before interaction.
- 🔁 Cross-page memory (remembers form step using session).

## 🚀 How to Use

1.  Open the Google Form (ensure you are on Page 1).
2.  Open DevTools Console (press F12 or Ctrl + Shift + I).
3.  Paste `script.js` into the console and press Enter.
4.  Wait for the page to load → repeat pasting the script on the next page.
5.  Continue until submission is complete.

<i>⚠️ Important: Paste the same script.js code on each form page to proceed. The script remembers where you left off.</i>

## ♻️ Resetting the Script

If something goes wrong or you want to restart:

1. Open the console (F12).
2. Paste the content of `reset-script.txt`.
3. Refresh the form and start again with `script.js`.

## ✅ Use Cases

- Automation with human-like behavior.
- Saving time during repetitive form submissions.

## ✨ Example Nicknames Generated

- CosmicVoyager
- SilentOracle
- BravePanther
- KindScholar
- ZanyDreamer

Each run creates a fresh, unique identity to simulate diverse users.

## 📂 Files Included

### `script.js`

- The main automation script.
- Fills out the form step-by-step across pages.
- Automatically detects current page state using `sessionStorage`.
- Includes human-like typing, scrolling, and click delays.
- Generates a **unique nickname** (like `BravePanther`) every time for personalization.

### `reset-script.txt`

- Contains a **one-line reset command** to clear progress and restart the form from page.
