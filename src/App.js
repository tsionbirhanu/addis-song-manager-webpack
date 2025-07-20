import React from "react";
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./styles/theme"
import Layout from "./components/Layout/Layout"
import SongList from "./pages/SongList"
import AddSong from "./pages/AddSong"
import EditSong from "./pages/EditSong"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/add" element={<AddSong />} />
          <Route path="/edit/:id" element={<EditSong />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
