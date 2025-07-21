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

<details> <summary><strong>📦 Tech Stack</strong></summary>
Frontend: React, Redux Toolkit, Redux-Saga, Emotion, Framer Motion

Backend API: MirageJS (Mock Server)

Icons: Lucide React

Testing: Jest + React Testing Library

Bundler: Custom Webpack configuration (no CRA)

</details>
🛠️ Getting Started
<details> <summary><strong>📥 Installation & Running</strong></summary>
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

# Navigate to: 
http://localhost:3000

# Run tests
npm test

# Build for production
npm run build
</details>
📡 API Endpoints
<details> <summary><strong>🔌 REST API Documentation (MirageJS)</strong></summary>
Method	Endpoint	Description
GET	/api/songs	Fetch all songs (pagination + search)
GET	/api/songs/:id	Get a single song
POST	/api/songs	Add a new song
PUT	/api/songs/:id	Update an existing song
DELETE	/api/songs/:id	Delete a song

⚠️ These endpoints are mocked using MirageJS
Source: src/mirage/server.js

</details>
**⚙️ Webpack Configuration (No CRA)**

This project is built without Create React App and uses a manual Webpack setup for complete control over the build process.

🔧 Key Webpack Features

JSX & TypeScript support via Babel

Hot Module Replacement (HMR)

CSS and image loaders

dotenv-webpack for environment variables

Code splitting & lazy loading

Optimized production bundle via TerserPlugin

🧪 How I Verified the Webpack Config

✅ Ran npm start and confirmed app builds and runs

✅ Verified dynamic reloading works during development

✅ Built with npm run build and tested dist/index.html

✅ Inspected bundled files for correct asset inclusion

**🤖 AI Usage & Code Verification**

✅ Tools Used
ChatGPT and GitHub Copilot for:

Boilerplate generation (Redux store, Webpack config)

Debugging assistance

Writing regex & filtering logic

Refactoring suggestions

🧠 What I Did Myself
💡 Every line of code was read, understood, and adjusted before submission

Modified and customized all AI-generated snippets

Verified all logic by manual testing in browser

Used console.log debugging and React DevTools

Wrote and ran unit tests for components and reducers

**🧬 Testing Strategy**

<details> <summary><strong>🧪 Tests & Verification</strong></summary>
Written using Jest + React Testing Library
Located in: src/__tests__/components/

Covers:
✅ Component rendering

✅ User interactions (clicks, input, form submission)

✅ Redux logic

Run with:
bash
Copy
Edit
npm test
✅ Also tested manually in browser
✅ Verified API mocking with MirageJS
✅ Redux DevTools used to confirm state flow

</details>

**📸 Preview Screenshot**

vercel deployment is currently being fixed. Here's a preview of the working app:
<img width="1854" height="824" alt="image" src="https://github.com/user-attachments/assets/d0d9c0ed-7191-4f2a-8a20-d689b134592c" />
<img width="1857" height="820" alt="image" src="https://github.com/user-attachments/assets/92601f50-dd94-4cba-8b04-5e9bfb25ef8d" />
<img width="1861" height="817" alt="image" src="https://github.com/user-attachments/assets/6b20a7fc-af4b-437c-bb1c-e54bfa16d072" />
<img width="1851" height="845" alt="image" src="https://github.com/user-attachments/assets/5807def8-e392-4d3c-b3ed-d29b713de130" />

**👤 Author**
Tsion Birhanu
📧 tsionbirhanu08@gmail.com

