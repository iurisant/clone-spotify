import Image from 'next/image';

import MinAlbumCover from '../../img/albumcover3.jpg';
import Sound from '../../img/sound.svg';
import Pause from '../../img/pause.svg';

export default function Player() {
  return (
    <section className='flex flex-col items-center mb-2 px-2 rounded-lg text-sm bg-spotify-3 w-full'>
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
              Helmet
            </strong>
            <span className='text-white/70'>
              Steve Lacy
            </span>
          </div>
          <div className='flex items-center mr-5'>
            <a href='#' className='mr-5 opacity-70'>
              <Image
                src={Sound}
                alt="Sound"
              />
            </a>
            <a href='#'>
              <Image
                src={Pause}
                alt="Pause"
              />
            </a>
          </div>
        </div>
      </div>
      <div className='w-full border-b-2' />
    </section >
  )
}