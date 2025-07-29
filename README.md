🎵 Addis Song Manager
A full-stack React application to manage songs — built for the Addis Software Internship Test Project.

A fully responsive song manager with CRUD functionality, global state, search & filter, and a custom Webpack setup (no CRA).

🚀 Features
🎶 Paginated song list (title, artist, album, year, genre, duration)

➕ Add, ✏️ Edit, 🗑️ Delete songs (CRUD)

🔍 Search & Filter by title, artist, album, and genre

📱 Responsive design for mobile and desktop

🌍 Global state using Redux Toolkit + Redux-Saga

🎨 Styled with Emotion (CSS-in-JS)

🧪 Unit-tested using Jest & React Testing Library

🌐 Mock backend powered by MirageJS

📦 Custom Webpack configuration (No CRA)

⚡ Code splitting via React.lazy()

🧱 Tech Stack
Category	Tools Used
Frontend	React, Redux Toolkit, Redux-Saga, Emotion
Mock API	MirageJS
Icons	Lucide React
Testing	Jest, React Testing Library
Bundler	Manual Webpack (No Create React App)

🛠️ Getting Started
bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/tsionbirhanu/addis-song-manager-webpack.git
cd addis-song-manager-webpack

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# ➜ Open: http://localhost:3000

# 4. Run unit tests
npm test

# 5. Build for production
npm run build
📡 Mock API Endpoints
MirageJS is used to simulate a backend. See implementation in src/mirage/server.js.

Method	Endpoint	Description
GET	/api/songs	Get all songs
GET	/api/songs/:id	Get song by ID
POST	/api/songs	Add a new song
PUT	/api/songs/:id	Update a song
DELETE	/api/songs/:id	Delete a song

⚙️ Webpack Configuration Highlights
This project uses a manual Webpack setup for full control.

Babel for JSX & TypeScript

CSS & image loaders

dotenv support for env variables

HMR (Hot Module Replacement)

Code splitting with React.lazy

Production optimization via TerserPlugin

🧠 AI Usage Transparency
✅ Used ChatGPT & GitHub Copilot for:

Boilerplate generation (Redux, Webpack)

Filtering logic, Webpack tweaks

Regex & helper utilities

✅ Manually tested & verified:

All code reviewed and understood

Used console, DevTools, and test cases

Debugged with Redux DevTools

🧪 Testing Strategy
Location: src/__tests__/components/

✅ Component rendering

✅ Form inputs & interactions

✅ Redux store state flow

✅ Integration with MirageJS

bash
Copy
Edit
npm test
🔗 Live Demo
👉 Visit the deployed app:
https://addis-song-manager-webpack.vercel.app/

👤 Author
Tsion Birhanu
📧 tsionbirhanu08@gmail.com
