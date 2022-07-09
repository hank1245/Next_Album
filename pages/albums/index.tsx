import Axios from "axios";

interface IAlbum {
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
          <div key={album.id}>
            <h1> {album.userId}</h1>
            <p>{album.id}</p>
            <p> {album.title}</p>
          </div>
        );
      })}
    </div>
  );
};

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
