import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { configureStore } from "@reduxjs/toolkit"
import SongCard from "../../components/Songs/SongCard"
import songsReducer from "../../store/slices/songsSlice"
import uiReducer from "../../store/slices/uiSlice"
import { theme } from "../../styles/theme"
import React from "react";

const mockSong = {
  id: "1",
  title: "Test Song",
  artist: "Test Artist",
  album: "Test Album",
  year: 2023,
  genre: "Rock",
  duration: 180,
}

const createTestStore = () => {
  return configureStore({
    reducer: {
      songs: songsReducer,
      ui: uiReducer,
    },
  })
}

const renderWithProviders = (component) => {
  const store = createTestStore()
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </BrowserRouter>
    </Provider>,
  )
}

describe("SongCard", () => {
  test("renders song information correctly", () => {
    renderWithProviders(<SongCard song={mockSong} />)

    expect(screen.getByText("Test Song")).toBeInTheDocument()
    expect(screen.getByText("Test Artist")).toBeInTheDocument()
    expect(screen.getByText("Test Album")).toBeInTheDocument()
    expect(screen.getByText("2023")).toBeInTheDocument()
    expect(screen.getByText("Rock")).toBeInTheDocument()
    expect(screen.getByText("3:00")).toBeInTheDocument()
  })

  test("renders edit and delete buttons", () => {
    renderWithProviders(<SongCard song={mockSong} />)

    expect(screen.getByText("Edit")).toBeInTheDocument()
    expect(screen.getByText("Delete")).toBeInTheDocument()
  })

  test("opens delete confirmation modal when delete button is clicked", () => {
    renderWithProviders(<SongCard song={mockSong} />)

    const deleteButton = screen.getByText("Delete")
    fireEvent.click(deleteButton)

    expect(screen.getByText("Delete Song")).toBeInTheDocument()
    expect(screen.getByText(/Are you sure you want to delete/)).toBeInTheDocument()
  })
})
