import Navbar from "./NavBar"

interface IProps{
  children: JSX.Element
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default Layout