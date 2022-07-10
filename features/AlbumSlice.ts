import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import {IAlbum} from '../pages/albums'
import Axios from 'axios'

interface InitialState {
    album:IAlbum[]
}


const initialState:InitialState = {
    album: []
}

export const albumSlice = createSlice({
    name:'album',
    initialState,
    reducers: {
        reset: (state) => {
            state.album = []
        },
        createAlbum: (state,action:PayloadAction<IAlbum[]>) => {
            state.album = state.album.concat(action.payload)
        },
        deleteAlbum: (state,action:PayloadAction<number>) => {
            state.album = state.album.filter(
                (album) => album.id !== action.payload
              );
        },
        updateAlbum: (state,action:PayloadAction<IAlbum>) => {
            state.album.map((album) => {
                if (album.id === action.payload.id) {
                  album.title = action.payload.title;
                }
              })
        },
        searchAlbums: (state,action:PayloadAction<string>) => {
            const albumData = JSON.parse(localStorage.getItem('album-data') || "")
            console.log(albumData)
            state.album = albumData.filter(
                (album: IAlbum) => album.title.includes(action.payload)
              )
              console.log(state.album, action.payload)
        }
    }
})

export const {reset, createAlbum, deleteAlbum, updateAlbum, searchAlbums} = albumSlice.actions

export default albumSlice.reducer