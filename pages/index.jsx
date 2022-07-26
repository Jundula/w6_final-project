import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'
import Film from '../images/undraw_home_cinema_l7yl.svg'
import FilmTape from '../images/Film_tape.png'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const Home = () => {

  const [effect, setEffect] = useState(false);
  
  function animation(){
   setEffect(true)
  }

  return (
    <div className=" overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="relative flex flex-col items-center pt-8 ">
        <h1 className=" text-4xl pb-8 text-center">Browse <br /> your <b> <br /> Way Yang</b></h1>
        <SearchBar animation={animation}/>
        <div className='h-300 w-300 flex items-center pt-16 z-10 '>
          <Image
          src={Film}
          width={300}
          height={300}
          objectFit="contain"
          className=''
          />
        </div>
        <div className={`${
            effect && "animate-slide"} absolute h-300 w-300 bottom-0 right-[-290px] flex items-center pt-16  `}>
          <Image
          src={FilmTape}
          width={300}
          height={300}
          objectFit="contain"
          className=''
          
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
