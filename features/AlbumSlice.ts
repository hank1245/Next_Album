import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
import {IAlbum} from '../pages/albums'

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
        createAlbum: (state,action:PayloadAction<IAlbum[]>) => {
            state.album = action.payload
        },
        deleteAlbum: (state,action:PayloadAction) => {

        } 
    }
})

export const {createAlbum, deleteAlbum} = albumSlice.actions

export default albumSlice.reducer