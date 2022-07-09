import Axios from "axios"
import Post from "../../components/Post"
import tw from "tailwind-styled-components/dist/tailwind"

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
`


const Album = ({ albumData }:IProps) => {
  return (
    <CardSection>
      {albumData.map((album) => {
        return (
          <Post data={album} key={album.id}/>
        )
      })}
    </CardSection>
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
