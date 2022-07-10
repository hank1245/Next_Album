import { configureStore } from "@reduxjs/toolkit"
import AlbumSlice from "../features/AlbumSlice"
import { createWrapper,HYDRATE } from "next-redux-wrapper"
import reducer from './module'

const store = configureStore({
    reducer: {
        albums: AlbumSlice
    }
})

const createStore = () => store

const wrapper = createWrapper(createStore)

export default wrapper
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch