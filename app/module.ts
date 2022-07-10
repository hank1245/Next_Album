import { combineReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import AlbumSlice, {albumSlice} from "../features/AlbumSlice"

const albumReducer = (state:any,action:any) => {
    if(HYDRATE === action.type) {
        return  {
            ...state,
            ...action.payload,
        }
    }
    return combineReducers({
        AlbumSlice,
    })(state,action)
}

export default albumReducer