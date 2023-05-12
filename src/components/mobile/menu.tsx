import Image from 'next/image';

import Home from '../../img/home.svg';
import Search from '../../img/search.svg';
import Library from '../../img/library.svg';
import Player from './player';

export default function Menu() {
  return (
    <section className='bg-gradient-to-b from-transparent to-black w-full h-auto fixed left-0 bottom-0 z-10 px-4 py-2'>
      <Player />
      <div className='flex justify-around h-10'>
        <a href="#" className='flex flex-col justify-center items-center text-xs'>
          <Image
            src={Home}
            alt="Home"
          />
          Home
        </a>
        <a href="#" className='flex flex-col justify-center items-center opacity-70 text-xs'>
          <Image
            src={Search}
            alt="Search"
          />
          Search
        </a>
        <a href="#" className='flex flex-col justify-center items-center opacity-70 text-xs'>
          <Image
            src={Library}
            alt="Library"
          />
          Library
        </a>
      </div>
    </section >
  )
}