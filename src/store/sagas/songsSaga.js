import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import React from "react"
import {
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
} from "../slices/songsSlice"
import { addNotification } from "../slices/uiSlice"
import * as api from "../../services/api"

function* fetchSongsSaga(action) {
  try {
    const response = yield call(api.fetchSongs, action.payload)
    yield put(fetchSongsSuccess(response))
  } catch (error) {
    yield put(fetchSongsFailure(error.message))
    yield put(
      addNotification({
        type: "error",
        message: "Failed to fetch songs",
      }),
    )
  }
}

function* fetchSongSaga(action) {
  try {
    const response = yield call(api.fetchSong, action.payload)
    yield put(fetchSongSuccess(response))
  } catch (error) {
    yield put(fetchSongFailure(error.message))
    yield put(
      addNotification({
        type: "error",
        message: "Failed to fetch song",
      }),
    )
  }
}

function* createSongSaga(action) {
  try {
    console.log("Saga - Creating song:", action.payload) 
    const response = yield call(api.createSong, action.payload)
    yield put(createSongSuccess(response))
    yield put(
      addNotification({
        type: "success",
        message: "Song created successfully",
      }),
    )
   
    window.history.pushState({}, "", "/")
    window.dispatchEvent(new PopStateEvent("popstate"))
  } catch (error) {
    console.error("Saga - Create song error:", error) 
    yield put(createSongFailure(error.message))
    yield put(
      addNotification({
        type: "error",
        message: "Failed to create song",
      }),
    )
  }
}

function* updateSongSaga(action) {
  try {
    console.log("Saga : Updating song:", action.payload) 
    const response = yield call(api.updateSong, action.payload.id, action.payload.data)
    yield put(updateSongSuccess(response))
    yield put(
      addNotification({
        type: "success",
        message: "Song updated successfully",
      }),
    )
   
    window.history.pushState({}, "", "/")
    window.dispatchEvent(new PopStateEvent("popstate"))
  } catch (error) {
    console.error("Saga - Update song error:", error) 
    yield put(updateSongFailure(error.message))
    yield put(
      addNotification({
        type: "error",
        message: "Failed to update song",
      }),
    )
  }
}

function* deleteSongSaga(action) {
  try {
    yield call(api.deleteSong, action.payload)
    yield put(deleteSongSuccess(action.payload))
    yield put(
      addNotification({
        type: "success",
        message: "Song deleted successfully",
      }),
    )
  } catch (error) {
    yield put(deleteSongFailure(error.message))
    yield put(
      addNotification({
        type: "error",
        message: "Failed to delete song",
      }),
    )
  }
}

export default function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga)
  yield takeLatest(fetchSongRequest.type, fetchSongSaga)
  yield takeEvery(createSongRequest.type, createSongSaga)
  yield takeEvery(updateSongRequest.type, updateSongSaga)
  yield takeEvery(deleteSongRequest.type, deleteSongSaga)
}
