🎵 Addis Song Manager
A full-stack React application for managing songs, developed as part of the Addis Software Internship Test Project.

It features CRUD operations, global state management, dynamic theming, and a fully custom Webpack setup (no Create React App).

🚀 Features
✅ Paginated list of songs (title, artist, album, year, genre, duration)

✅ Add, edit, and delete songs (CRUD)

✅ Search and filter functionality

✅ Fully responsive UI

✅ State management using Redux Toolkit + Redux-Saga

✅ Styled with Emotion (CSS-in-JS)

✅ Mock backend powered by MirageJS

✅ Manual Webpack setup (no CRA)

✅ Component and logic testing using Jest & React Testing Library

✅ Code-splitting with React.lazy()

✅ Unit & component testing with Jest

📦 Tech Stack
<details> <summary><strong>Click to view</strong></summary>
Frontend: React, Redux Toolkit, Redux-Saga, Emotion, Framer Motion

Backend API: MirageJS (Mock Server)

Icons: Lucide React

Testing: Jest + React Testing Library

Bundler: Custom Webpack configuration (no CRA)

</details>
🛠️ Getting Started
<details> <summary><strong>Installation & Running</strong></summary>
bash
Copy
Edit
# Clone the repository
git clone https://github.com/tsionbirhanu/addis-song-manager-webpack.git
cd addis-song-manager/addis-song-manager

# Install dependencies
npm install

# Start the development server
npm start

# Open your browser and navigate to:
http://localhost:3000

# Run tests
npm test

# Build for production
npm run build
</details>
📡 API Endpoints
<details> <summary><strong>MirageJS Mock API</strong></summary>
Method	Endpoint	Description
GET	/api/songs	Fetch all songs
GET	/api/songs/:id	Get a single song
POST	/api/songs	Add a new song
PUT	/api/songs/:id	Update an existing song
DELETE	/api/songs/:id	Delete a song

⚠️ These endpoints are mocked using MirageJS (see src/mirage/server.js)

</details>
⚙️ Webpack Configuration (No CRA)
This project uses a manual Webpack setup for full control.

Key Features:

JSX & TypeScript via Babel

Hot Module Replacement (HMR)

CSS and image loaders

dotenv-webpack for environment variables

Code splitting & lazy loading

Optimized production bundle (TerserPlugin)

Verification:

✅ npm start confirms successful build & dev run

✅ Verified dynamic reloading during development

✅ npm run build works; tested dist/index.html

✅ Bundled files include correct assets

🤖 AI Usage & Code Verification
Tools Used:
ChatGPT & GitHub Copilot for:

Boilerplate (Redux store, Webpack config)

Debugging help

Regex & logic generation

Refactoring suggestions

What I Did Myself:

💡 Reviewed and adjusted every AI-generated snippet

✅ Manually tested all logic in browser

✅ Used console.log and React DevTools for debugging

✅ Wrote unit tests for components & reducers

🧪 Testing Strategy
<details> <summary><strong>Tests & Verification</strong></summary>
📁 Tests in: src/__tests__/components/

✅ Render & interaction tests (clicks, inputs, submissions)

✅ Redux logic covered

✅ Ran with npm test

✅ Manual browser testing

✅ Verified API mocks (MirageJS)

✅ Used Redux DevTools for state validation

</details>
📸 Preview Screenshots
Vercel deployment is currently being fixed. Here's a preview of the working app:

<img width="1854" height="824" alt="image" src="https://github.com/user-attachments/assets/d0d9c0ed-7191-4f2a-8a20-d689b134592c" /> <img width="1857" height="820" alt="image" src="https://github.com/user-attachments/assets/92601f50-dd94-4cba-8b04-5e9bfb25ef8d" /> <img width="1861" height="817" alt="image" src="https://github.com/user-attachments/assets/6b20a7fc-af4b-437c-bb1c-e54bfa16d072" /> <img width="1851" height="845" alt="image" src="https://github.com/user-attachments/assets/5807def8-e392-4d3c-b3ed-d29b713de130" />
👤 Author
Tsion Birhanu
📧 tsionbirhanu08@gmail.com
