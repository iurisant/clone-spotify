import Image from 'next/image';

import MinAlbumCover from '@/img/albumcover3.jpg';
import { Home } from 'lucide-react'
import { Search } from 'lucide-react'
import { Library } from 'lucide-react'
import { Speaker } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Pause } from 'lucide-react'

export default function Menu({ title, album }: { title: string, album: string }) {
  return (
    <section className='bg-gradient-to-b from-transparent to-black w-full h-auto fixed left-0 bottom-0 z-10 px-2 py-2'>
      <div className='flex flex-col items-center mb-2 px-2 rounded-lg text-sm bg-sky-900 w-full'>
        <div className='flex items-center w-full'>
          <Image
            className='rounded'
            src={MinAlbumCover}
            alt=""
            width={40}
            height={40}
          />
          <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col p-3'>
              <strong>
                {title}
              </strong>
              <span className='text-white/70'>
                {album}
              </span>
            </div>
            <div className='flex items-center gap-4 mr-5'>
              <a href='#' className='opacity-70'>
                <Speaker />
              </a>
              <a href='#'>
                <Heart />
              </a>
              <a href='#'>
                <Pause />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full h-[2px] rounded-full bg-white/10 relative'>
          <div className='w-10/12 h-full rounded-full bg-white absolute' />
        </div>
      </div >
      <div className='flex justify-evenly h-10'>
        <a href="#" className='flex flex-col justify-center items-center text-xxs mx-4'>
          <Home />
          Início
        </a>
        <a href="#" className='flex flex-col justify-center items-center opacity-70 text-xxs mx-4'>
          <Search />
          Buscar
        </a>
        <a href="#" className='flex flex-col justify-center items-center opacity-70 text-xxs mx-4'>
          <Library />
          Biblioteca
        </a>
      </div>
    </section >
  )
}