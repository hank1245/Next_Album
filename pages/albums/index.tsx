import Axios from "axios"
import Post from "../../components/Post"
import tw from "tailwind-styled-components/dist/tailwind"
import React, { useEffect, useState } from "react"
import Pagination from "../../components/Pagination"
import { createAlbum, searchAlbums, reset } from "../../features/AlbumSlice"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../app/store"

export interface IAlbum {
    userId: number
    id: number
    title: string
}

interface IProps {
    albumData: IAlbum[]
}

const CardSection = tw.section`
mt-8
grid
grid-cols-3
gap-8
justify-items-center
min-h-screen
`

const Container = tw.div`
flex
w-80
justify-center
h-[30vh]
items-center
`


const Album = ({ albumData }:IProps) => {
  const {album} = useSelector((state:RootState) => state.albums)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reset())
    dispatch(createAlbum(albumData))
  },[])


  const [page, setPage] = useState<number>(1)
  const [title, setTitle] = useState("")
  const [searchInput, setSearchInput] = useState<string>("")

  useEffect(() => { 
    setCurrentPageData(album.slice(0,limit))
   }, [album,searchInput]);
  
  const limit = 5
  const MaxPage = Math.ceil(album.length / limit)
  const [currentPageData, setCurrentPageData] = useState<IAlbum[]>(album.slice(0,limit))

  const handlePageChange = (count:number) => {
    setPage(count)
    const offset = (count-1)*limit
    setCurrentPageData(album.slice(offset,offset+limit))
  }

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
    setPage(1)
    setTitle("")
  }

  const updateSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    dispatch(searchAlbums(e.target.value))
  }

  return (
    <>
    <input type='text' className="w-[50%] block mx-auto input-secondary input mt-10"
    placeholder="Search..." onChange={(e) => updateSearch(e)} value={searchInput}/>
    {album && <CardSection>
      {currentPageData.map((data) => <Post data={data} key={data.id}/>)}
      <Container>
        <div className="flex flex-col w-full">
        <textarea className="textarea textarea-primary bg-transparent" placeholder="Add title..."
        value={title}
        onChange={(e) =>onChange(e)}></textarea>
        <button className="btn btn-secondary mt-8 " onClick={addNewAlbum}>Add New Album</button>
        </div>
      </Container>
    </CardSection>}
    <Pagination current={page} onChange={handlePageChange} hasNext={page < MaxPage}/>
  </>

  )
}

export const getStaticProps = async () => {
  const response = await Axios.get(
    `https://jsonplaceholder.typicode.com/albums?_end=20`
  )

  return {
    props: {
      albumData: response.data,
    },
  }
}

export default Album
