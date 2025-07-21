Here’s a **more interactive, visually attractive, and well-structured version** of your `README.md`, with proper spacing, consistent sections, and animated-like feel (using emojis + layout) — **without using `<details>` or `</>`**.

---

# 🎵 Addis Song Manager

> A full-stack React app to manage songs — built for the **Addis Software Internship Test Project**.

It includes powerful CRUD features, global state, dynamic theming, and a fully **custom Webpack setup** (no CRA). 

---

## 🚀 Features

* ✅ Paginated list of songs *(title, artist, album, year, genre, duration)*
* ✅ Add, Edit, Delete songs *(CRUD)*
* ✅ Search & Filter functionality
* ✅ Fully responsive UI
* ✅ State management with **Redux Toolkit + Redux-Saga**
* ✅ Styled using **Emotion (CSS-in-JS)**
* ✅ **Mock Backend** with MirageJS
* ✅ Manual Webpack Setup *(no Create React App)*
* ✅ Component + Logic Testing using **Jest & React Testing Library**
* ✅ Code-splitting with `React.lazy()`

---

## 📦 Tech Stack

**Frontend**: React, Redux Toolkit, Redux-Saga, Emotion, Framer Motion
**Backend**: MirageJS (Mock Server)
**Icons**: Lucide React
**Testing**: Jest + React Testing Library
**Bundler**: Manual Webpack (no CRA)

---

## 🛠️ Getting Started

```bash
# Clone the repo
git clone https://github.com/tsionbirhanu/addis-song-manager-webpack.git
cd addis-song-manager/addis-song-manager

# Install dependencies
npm install

# Start development server
npm start
# Open: http://localhost:3000

# Run tests
npm test

# Build for production
npm run build
```

---

## 📡 REST API Endpoints (Mocked via MirageJS)

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | /api/songs      | Fetch all songs     |
| GET    | /api/songs/\:id | Fetch a single song |
| POST   | /api/songs      | Add a new song      |
| PUT    | /api/songs/\:id | Update a song       |
| DELETE | /api/songs/\:id | Delete a song       |

⚠️ **Note**: All endpoints are mocked using MirageJS (see `src/mirage/server.js`)

---

## ⚙️ Webpack Configuration

This project uses a **custom Webpack config** (not CRA) for full control.

🧩 Key Features:

* Babel for JSX + TypeScript
* CSS + image loaders
* dotenv-webpack for env variables
* HMR (Hot Module Replacement)
* Code splitting with lazy loading
* Production optimization via **TerserPlugin**

✅ **Verified**:

* `npm start` runs the app
* Live reload works
* `npm run build` creates production build
* `dist/index.html` works independently
* Bundle inspected for correct asset loading

---

## 🤖 AI Usage & Code Verification

✅ **Tools Used**:

* ChatGPT & GitHub Copilot for:

  * Boilerplate generation (Redux, Webpack)
  * Regex, filtering logic
  * Debug help & refactoring

🧠 **My Work**:

* Read, understood, and **modified every AI-assisted code**
* Manually tested in browser
* Used React DevTools + `console.log` for debugging
* Wrote unit tests for components & reducers

---

## 🧪 Testing Strategy

📁 Location: `src/__tests__/components/`

🧬 Covers:

* ✅ Rendering
* ✅ User interactions (input, clicks)
* ✅ Redux logic

🧪 Run:

```bash
npm test
```

🛠 Verified with:

* Manual browser tests
* API mocking check (MirageJS)
* Redux DevTools to confirm state flow

---

## 📸 Preview Screenshots

> Vercel deployment is still being finalized. Here's a **live preview** of the working app:

<img width="100%" alt="Preview 1" src="https://github.com/user-attachments/assets/d0d9c0ed-7191-4f2a-8a20-d689b134592c" />
<br />
<img width="100%" alt="Preview 2" src="https://github.com/user-attachments/assets/92601f50-dd94-4cba-8b04-5e9bfb25ef8d" />
<br />
<img width="100%" alt="Preview 3" src="https://github.com/user-attachments/assets/6b20a7fc-af4b-437c-bb1c-e54bfa16d072" />
<br />
<img width="100%" alt="Preview 4" src="https://github.com/user-attachments/assets/5807def8-e392-4d3c-b3ed-d29b713de130" />

---

## 👤 Author

**Tsion Birhanu**
📧 [tsionbirhanu08@gmail.com](mailto:tsionbirhanu08@gmail.com)

---
