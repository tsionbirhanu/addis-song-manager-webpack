import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";

const SongListPage = lazy(() => import("./pages/SongList"));
const AddSong = lazy(() => import("./pages/AddSong"));
const EditSong = lazy(() => import("./pages/EditSong"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SongListPage />} />
            <Route path="/add" element={<AddSong />} />
            <Route path="/edit/:id" element={<EditSong />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;