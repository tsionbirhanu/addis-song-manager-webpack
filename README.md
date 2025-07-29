
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
cd addis-song-manager

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
| GET    | /api/songs/:id  | Fetch a single song |
| POST   | /api/songs      | Add a new song      |
| PUT    | /api/songs/:id  | Update a song       |
| DELETE | /api/songs/:id  | Delete a song       |

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

  * Generating boilerplate (Redux setup, Webpack configuration)
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

🔗 Live Demo
✅ Visit the live deployed site here:
👉 https://addis-song-manager-webpack.vercel.app/


---

## 👤 Author

**Tsion Birhanu**
📧 [tsionbirhanu08@gmail.com](mailto:tsionbirhanu08@gmail.com)

---
