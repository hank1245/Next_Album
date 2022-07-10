import React,{ChangeEvent, useState} from 'react'
import {IAlbum} from '../pages/albums/index'
import tw from "tailwind-styled-components"
import { useDispatch } from 'react-redux'
import {deleteAlbum, updateAlbum} from '../features/AlbumSlice'

interface Props {
  data: IAlbum
}

const Container = tw.div`
card 
w-72
lg:w-96 
max-h-[500px]
bg-base-100 
shadow-xl

`

const Post = ({data}:Props) => {
  const [isModifying, setIsModifying] = useState(false)
  const [title, setTitle] = useState(data.title)
  const dispatch = useDispatch()

  const modifyTitle = () => {
    setIsModifying(true)
  }
  const saveTitle = () => {
    dispatch(updateAlbum({
      userId: data.userId,
      id: data.id,
      title: title
    }))
    setIsModifying(false)
  }
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  const deletePost = () => {
    dispatch(deleteAlbum(data.id))
  }

  return (
    <Container>
      <figure>
          <img src="https://place-hold.it/400x225/666" alt="Placeholder Image" />
      </figure>
      <div className="card-body">
          {isModifying ? <textarea className="textarea textarea-primary bg-transparent" value={title} onChange={e =>onChange(e)}></textarea>
          : <h2 className="card-title">{title}</h2>}
          <div className="card-actions justify-end">
            <button className='btn' onClick={deletePost}>Delete</button>
              {isModifying ? <button className="btn btn-secondary" onClick={saveTitle}>Save</button>
              : <button className="btn btn-secondary" onClick={modifyTitle}>Modify</button>}
          </div>
      </div>
    </Container>
  )
}

export default Post