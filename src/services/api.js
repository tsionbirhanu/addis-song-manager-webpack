const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "/api"

class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Network error" }))
    throw new ApiError(error.error || "Something went wrong", response.status)
  }

  if (response.status === 204) {
    return null
  }

  return response.json()
}

export const fetchSongs = async (params = {}) => {
  const searchParams = new URLSearchParams()

  if (params.page) searchParams.append("page", params.page)
  if (params.limit) searchParams.append("limit", params.limit)
  if (params.search) searchParams.append("search", params.search)

  const url = `${API_BASE_URL}/songs?${searchParams}`
  console.log("Fetching songs from:", url)
  
  const response = await fetch(url)
  console.log("Response status:", response.status)
  
  return handleResponse(response)
}

export const fetchSong = async (id) => {
  const response = await fetch(`${API_BASE_URL}/songs/${id}`)
  return handleResponse(response)
}

export const createSong = async (songData) => {
  const response = await fetch(`${API_BASE_URL}/songs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  })
  return handleResponse(response)
}

export const updateSong = async (id, songData) => {
  const response = await fetch(`${API_BASE_URL}/songs/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  })
  return handleResponse(response)
}

export const deleteSong = async (id) => {
  const response = await fetch(`${API_BASE_URL}/songs/${id}`, {
    method: "DELETE",
  })
  return handleResponse(response)
}
