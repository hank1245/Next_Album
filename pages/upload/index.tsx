import { useState } from "react"
import React from 'react'
import tw from 'tailwind-styled-components'
import {createAlbum} from '../../features/AlbumSlice'
import { useDispatch } from "react-redux"
import {v4 as uuidv4} from 'uuid'


interface Props {}

const Container = tw.div`
flex
w-full
justify-center
h-[30vh]
items-center
`

const index = () => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target.value
    setTitle(input)
  }

  const addNewAlbum = () => {
    dispatch(createAlbum([{
        title: title,
        userId: Math.floor(Math.random()*100),
        id:  Math.floor(Math.random()*1000)
    }]))
  }

  return (
  <Container>
    <div className="flex flex-col">
    <textarea className="textarea textarea-primary bg-transparent" placeholder="Add title..."
    value={title}
    onChange={(e) =>onChange(e)}></textarea>
    <button className="btn btn-secondary" onClick={addNewAlbum}>Add New Album</button>
    </div>
  </Container>)
}

export default index