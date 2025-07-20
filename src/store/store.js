import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import songsReducer from "./slices/songsSlice"
import uiReducer from "./slices/uiSlice"
import rootSaga from "./sagas/rootSaga"
import { ReturnType } from "react"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
