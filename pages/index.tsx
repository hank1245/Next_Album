import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <span className="text-[3rem] text-center">Make your own <br/>Album!</span>
    </div>
  )
}

export default Home
