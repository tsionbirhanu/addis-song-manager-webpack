# Addis Song Manager 🎵

A full-stack React application for managing songs, developed as part of the **Addis Software Internship Test Project**. It features CRUD operations, global state management, dynamic theming, and a fully custom Webpack setup (no Create React App).

---

## 🚀 Features

- ✅ Paginated list of songs (title, artist, album, year)
- ✅ Add, edit, and delete songs (CRUD)
- ✅ Search and filter functionality
- ✅ Responsive design (mobile-friendly)
- ✅ State management using Redux Toolkit + Redux-Saga
- ✅ Styled with Emotion (CSS-in-JS)
- ✅ Mock backend powered by MirageJS
- ✅ Manual Webpack setup (no CRA)
- ✅ Component and logic testing using Jest & React Testing Library

---

## 🧰 Technologies Used

| Technology             | Purpose                            |
|------------------------|------------------------------------|
| **ReactJS**            | UI development                     |
| **Redux Toolkit**      | State management                   |
| **Redux-Saga**         | Handling side effects              |
| **Emotion**            | Component-level styling            |
| **MirageJS**           | In-browser mock API server         |
| **Webpack**            | Module bundling (custom setup)     |
| **Jest**               | Unit testing                       |
| **React Testing Library** | Component testing              |

---

## 📦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/tsionbirhanu/addis-song-manager.git
   cd addis-song-manager
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser.

Run tests

bash
Copy
Edit
npm test
🔌 API Endpoints (Mocked with MirageJS)
Method	Endpoint	Description
GET	/api/songs	Fetch all songs (paginated)
GET	/api/songs/:id	Get a specific song by ID
POST	/api/songs	Create a new song
PUT	/api/songs/:id	Update song details
DELETE	/api/songs/:id	Delete a song

⚙️ Webpack Configuration (No CRA)
This project is built without Create React App and uses a manual Webpack setup for complete control over the build process.

🔧 Key Webpack Features
Entry Point: src/index.tsx

Output: dist folder with hashed bundle

Loaders:

Babel Loader: Transpiles .tsx and .jsx files

CSS Loader & Style Loader: Handles CSS imports

File Loader: For images, fonts, and static assets

DevServer: Serves app at localhost:3000, supports hot reload

Environment Variables: Handled via dotenv-webpack

Extensions: Supports .ts, .tsx, .js, .jsx

🧪 How I Verified the Webpack Config
Ran npm start and confirmed the app builds and runs correctly

Verified dynamic reloading works during development

Built the app with npm run build and tested dist/index.html

Inspected bundled files for correct asset inclusion

🤖 AI Usage & Code Verification
✅ Tools Used
ChatGPT and GitHub Copilot were used for:

Boilerplate generation (Redux store, Webpack config)

Debugging assistance

Writing regex and filtering logic

Refactoring suggestions

🧠 What I Did Myself
💡 Every line of code was read, understood, and adjusted by me before submission.

Modified and customized all AI-generated snippets

Verified all logic by manual testing in the browser

Used console.log debugging and React DevTools

Wrote and ran unit tests for components and reducers

🧪 Testing Strategy
Tests are located in:

bash
Copy
Edit
src/__tests__/components/
To run tests:

bash
Copy
Edit
npm test
Test coverage includes:

Component rendering and behavior

Redux actions and reducers

Basic integration flows (e.g., form submission)

👤 Author
Tsion Birhanu
Frontend Developer | Software Engineering Student
