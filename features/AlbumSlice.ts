import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import {IAlbum} from '../pages/albums'

interface InitialState {
    album:IAlbum[]
}

const initialState:InitialState = {
    album: []
    //초깃값으로 넣고 concat은 빼자!! push로 하는게 낫다
}

export const albumSlice = createSlice({
    name:'album',
    initialState,
    reducers: {
        createAlbum: (state,action:PayloadAction<IAlbum[]>) => {
            state.album = state.album.concat(action.payload)
        },
        deleteAlbum: (state,action:PayloadAction<IAlbum>) => {
            state.album = state.album.filter(
                (album) => album.id !== action.payload.id
              );
        },
        updateAlbum: (state,action:PayloadAction<IAlbum>) => {
            state.album.map((album) => {
                if (album.id === action.payload.id) {
                  album.title = action.payload.title;
                }
              });
        }
    }
})

export const {createAlbum, deleteAlbum, updateAlbum} = albumSlice.actions

export default albumSlice.reducer