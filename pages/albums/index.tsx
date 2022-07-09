import Axios from "axios"
import Post from "../../components/Post"

export interface IAlbum {
    userId: number
    id: number
    title: string
}

interface IProps {
    albumData: IAlbum[]
}

const Album = ({ albumData }:IProps) => {
  return (
    <div>
      {albumData.map((album) => {
        return (
          <Post data={album}/>
        )
      })}
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await Axios.get(
    " https://jsonplaceholder.typicode.com/albums"
  )

  return {
    props: {
      albumData: response.data,
    },
  }
}

export default Album
