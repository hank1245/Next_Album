import React from 'react'
import {IAlbum} from '../pages/albums/index'
import tw from "tailwind-styled-components"

interface Props {
  data: IAlbum
}

const Container = tw.div`

`

const Post = ({data}:Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
        <img src="https://place-hold.it/400x225/666" alt="Placeholder Image" />
    </figure>
    <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Modify</button>
        </div>
    </div>
    </div>
  )
}

export default Post