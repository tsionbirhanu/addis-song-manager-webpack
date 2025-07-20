import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  songs: [],
  currentSong: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  },
  filters: {
    search: "",
  },
  loading: false,
  error: null,
}

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {

    fetchSongsRequest: (state, action) => {
      state.loading = true
      state.error = null
      if (action.payload?.page) {
        state.pagination.page = action.payload.page
      }
      if (action.payload?.search !== undefined) {
        state.filters.search = action.payload.search
      }
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false
      state.songs = action.payload.data
      state.pagination = action.payload.pagination
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    fetchSongRequest: (state, action) => {
      state.loading = true
      state.error = null
    },
    fetchSongSuccess: (state, action) => {
      state.loading = false
      state.currentSong = action.payload
    },
    fetchSongFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Create song
    createSongRequest: (state, action) => {
      state.loading = true
      state.error = null
    },
    createSongSuccess: (state, action) => {
      state.loading = false
      state.songs.unshift(action.payload)
    },
    createSongFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Update song
    updateSongRequest: (state, action) => {
      state.loading = true
      state.error = null
    },
    updateSongSuccess: (state, action) => {
      state.loading = false
      const index = state.songs.findIndex((song) => song.id === action.payload.id)
      if (index !== -1) {
        state.songs[index] = action.payload
      }
      state.currentSong = action.payload
    },
    updateSongFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Delete song
    deleteSongRequest: (state, action) => {
      state.loading = true
      state.error = null
    },
    deleteSongSuccess: (state, action) => {
      state.loading = false
      state.songs = state.songs.filter((song) => song.id !== action.payload)
    },
    deleteSongFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },

    // Clear current song
    clearCurrentSong: (state) => {
      state.currentSong = null
    },

    clearError: (state) => {
      state.error = null
    },
  },
})

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  fetchSongRequest,
  fetchSongSuccess,
  fetchSongFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSongRequest,
  deleteSongSuccess,
  deleteSongFailure,
  clearCurrentSong,
  clearError,
} = songsSlice.actions

export default songsSlice.reducer
