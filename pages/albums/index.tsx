import Axios from "axios"
import Post from "../../components/Post"
import tw from "tailwind-styled-components/dist/tailwind"
import { useState } from "react"
import Pagination from "../../components/Pagination"

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


const Album = ({ albumData }:IProps) => {
  const [page, setPage] = useState<number>(1)
  const limit = 5
  const MaxPage = albumData.length / limit
  const [currentPageData, setCurrentPageData] = useState<IAlbum[]>(albumData.slice(0,limit))

  const handlePageChange = (count:number) => {
    setPage(count)
    const offset = (count-1)*limit
    setCurrentPageData(albumData.slice(offset,offset+limit))
  }

  return (
    <>
    <CardSection>
      {currentPageData.map((album) => {
        return (
          <Post data={album} key={album.id}/>
        )
      })}
    </CardSection>
    <Pagination current={page} onChange={handlePageChange} hasNext={page < MaxPage}/>
  </>

  )
}

export const getStaticProps = async () => {
  const response = await Axios.get(
    `https://jsonplaceholder.typicode.com/albums`
  )

  return {
    props: {
      albumData: response.data,
    },
  }
}

export default Album
