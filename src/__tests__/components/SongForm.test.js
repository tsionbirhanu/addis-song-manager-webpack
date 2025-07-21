"use client"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ThemeProvider } from "@emotion/react"
import SongForm from "../../components/Songs/SongForm"
import { theme } from "../../styles/theme"
import React from "react";

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}

describe("SongForm", () => {
  const mockOnSubmit = jest.fn()
  const mockOnCancel = jest.fn()

  beforeEach(() => {
    mockOnSubmit.mockClear()
    mockOnCancel.mockClear()
  })

  test("renders all form fields", () => {
    renderWithTheme(<SongForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />)

    expect(screen.getByLabelText(/Song Title/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Artist/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Album/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Year/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Genre/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Duration/)).toBeInTheDocument()
  })

  test("shows validation errors for required fields", async () => {
    renderWithTheme(<SongForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />)

    const submitButton = screen.getByText("Save Song")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("Song title is required")).toBeInTheDocument()
      expect(screen.getByText("Artist is required")).toBeInTheDocument()
    })
  })

  test("calls onSubmit with form data when valid form is submitted", async () => {
    renderWithTheme(<SongForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />)

    fireEvent.change(screen.getByLabelText(/Song Title/), {
      target: { value: "Test Song" },
    })
    fireEvent.change(screen.getByLabelText(/Artist/), {
      target: { value: "Test Artist" },
    })
    fireEvent.change(screen.getByLabelText(/Year/), {
      target: { value: "2023" },
    })

    const submitButton = screen.getByText("Save Song")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Test Song",
          artist: "Test Artist",
          year: 2023,
        }),
      )
    })
  })

  test("calls onCancel when cancel button is clicked", () => {
    renderWithTheme(<SongForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />)

    const cancelButton = screen.getByText("Cancel")
    fireEvent.click(cancelButton)

    expect(mockOnCancel).toHaveBeenCalled()
  })
})
