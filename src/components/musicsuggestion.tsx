import Image from 'next/image';

import AlbumCover from '../img/albumcover.jpg';

export default function MusicSuggestion() {
  return (
    <section className='grid grid-rows-3 grid-flow-col gap-3 mb-8 overflow-hidden'>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
      <a href='#' className='flex items-center bg-white/10 rounded'>
        <Image
          className='rounded-l'
          src={AlbumCover}
          alt="AlbumCover"
          width={50}
          height={50}
        />
        <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>Happier Than Ever</span>
      </a>
    </section >
  )
}