import React,{ChangeEvent, useState} from 'react'
import {IAlbum} from '../pages/albums/index'
import tw from "tailwind-styled-components"
import { useDispatch } from 'react-redux'

interface Props {
  data: IAlbum
}

const Container = tw.div`
card 
w-96 
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
    setIsModifying(false)
  }
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
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
              {isModifying ? <button className="btn btn-secondary" onClick={saveTitle}>Save</button>
              : <button className="btn btn-secondary" onClick={modifyTitle}>Modify</button>}
          </div>
      </div>
    </Container>
  )
}

export default Post