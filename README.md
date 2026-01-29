<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🌌 NEON OCCULT NOLA GUIDE

### *Where the spectral meets the silicon. Map the spirit of New Orleans through the lens of the Major Arcana.*

[![CI](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/user/repo/actions/workflows/ci.yml)
[![Deploy](https://github.com/user/repo/actions/workflows/deploy.yml/badge.svg)](https://github.com/user/repo/actions/workflows/deploy.yml)

---

## 🔮 THE VISION

New Orleans isn't just a city; it's a living, breathing deck of Tarot cards. **Neon Occult NOLA** is your digital talisman, a Progressive Web App (PWA) designed to guide you through the city's hidden vibrations. Whether you're seeking the chaotic energy of **The Fool** in a 24/7 dive bar or the ancestral wisdom of **The Devil** in a voodoo supply shop, this guide reveals the city's true face.

## ✨ CORE FEATURES

- **🃏 The Major Arcana Mapping**: Every curated location is bound to a card of the Major Arcana. Explore the city by suit and discover the spiritual architecture of the Crescent City.
- **✨ AI-Generated Prophecies**: Consult the veil at any location. Powered by **Google Gemini AI**, the app generates cryptic, poetic, and glitchy spiritual readings tailored to your destination.
- **🔮 The Oracle (Crystal Ball)**: Can't decide your path? Gaze into the digital crystal ball for a singular, fated recommendation from NHEN's exclusive list.
- **🎴 The Spread (Randomizer)**: Draw a three-card spread to reveal your spectral coordinates for the night.
- **⭐ The North Star**: Never get lost in the heavy NOLA night. "Bind" your hotel or sanctuary address at the Altar, and use the floating North Star to navigate back instantly via Google Maps.
- **📱 PWA & Offline Support**: Fully installable on iOS, Android, and Desktop. Core features and assets are cached for those moments when the signal fades but the spirits remain.

## 🛠️ THE ARCHITECTURE (For the Tech-Witch)

Neon Occult NOLA is built on a "witchy-glitchy" stack designed for performance, resilience, and aesthetic immersion:

- **Frontend**: React 19 + TypeScript + Vite.
- **Styling**: Tailwind CSS + custom SVG pixelate filters and glassmorphism.
- **Intelligence**: Google Gemini AI (via `@google/genai`).
- **Integrity**: Comprehensive test suite (Vitest + Testing Library) with 20+ tests ensuring every component and view holds firm.
- **Resilience**: Integrated `ErrorBoundary` and automated runtime error reporting.
- **Automation**: Advanced GitHub Workflows for CI/CD, PWA publishing, and automated bug fixing.

## 🚀 GETTING STARTED

### Prerequisites
- Node.js (v20 or higher)
- A Google Gemini API Key

### Local Installation
1. **Clone the Altar**:
   ```bash
   git clone https://github.com/your-repo/neon-occult-nola.git
   cd neon-occult-nola
   ```
2. **Install the Talismans**:
   ```bash
   npm install
   ```
3. **Bind your Keys**:
   Create a `.env.local` file and add your key:
   ```env
   GEMINI_API_KEY=your_key_here
   ```
4. **Ignite the Matrix**:
   ```bash
   npm run dev
   ```

## 🚀 DEPLOYMENT

This app is optimized for GitHub Pages.
1. Ensure your repository settings have **Settings > Pages > Build and deployment > Source** set to **GitHub Actions**.
2. The `deploy.yml` workflow will automatically handle the rest on every push to `main`.

## 🧪 TESTING & VERIFICATION

Maintain the app's spectral integrity with our full suite of tests:
```bash
npm test
```
Or build the production-ready PWA:
```bash
npm run build
```

## 📜 DOCUMENTATION LIBRARY

Dive deeper into the shadows:
- [Architecture Guide](docs/ARCHITECTURE.md)
- [PWA Implementation](docs/PWA.md)
- [Testing Strategy](docs/TESTING.md)
- [CI/CD & Automation](docs/CI_CD.md)

---

<div align="center">
  <p><i>"The neon hums a cryptic truth, seek yours within the shadows."</i></p>
  <p><b>Created with intent by Jules</b></p>
</div>
