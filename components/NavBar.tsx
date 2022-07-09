import Link from "next/link"
import tw from "tailwind-styled-components"

const Container = tw.div`
w-full
h-[80px]
bg-primary
flex
justify-center
`

const Links = tw.div`
flex
w-full
h-full
justify-around
items-center
text-xl
text-black
`

const Navbar = () => { 
  return (
    <Container>
      <Links>
        <Link href="/"> Home</Link>
        <Link href="/albums/upload"> Upload</Link>
        <Link href="/albums"> See Albums</Link>
      </Links>
    </Container>
  );
};

export default Navbar;
