import React from 'react'
import {IAlbum} from '../pages/albums/index'

interface Props {
  data: IAlbum
}

const Post = ({data}:Props) => {
  return (
    <div key={data.id}>
        <h1> {data.userId}</h1>
        <p>{data.id}</p>
        <p> {data.title}</p>
    </div>
  )
}

export default Post