import Image from 'next/image';
import MinAlbumCover from '@/img/albumcover3.jpg';
import { Heart } from 'lucide-react'
import { Shuffle } from 'lucide-react'
import { SkipBack } from 'lucide-react'
import { Play } from 'lucide-react'
import { SkipForward } from 'lucide-react'
import { Repeat2 } from 'lucide-react'
import { PlaySquare } from 'lucide-react'
import { Mic2 } from 'lucide-react'
import { ListMusic } from 'lucide-react'
import { Speaker } from 'lucide-react'
import { Volume1 } from 'lucide-react'
import { Maximize2 } from 'lucide-react'


export default function MenuWeb({ title, album }: { title: string, album: string }) {
  return (
    <section className='fixed z-20 bottom-0 w-full h-auto bg-spotify-1 p-4 flex items-center justify-between'>
      <div className='min-w-[33.333%] flex items-center gap-6'>
        <div>
          <Image
            className='rounded'
            src={MinAlbumCover}
            alt="Logo Spotify"
            width={50}
            height={50}
          />
        </div>
        <div className='mr-4'>
          <p className='font-semibold text-md'>
            {title}
          </p>
          <p className='text-white/70 text-xs'>
            {album}
          </p>
        </div>
        <div className='flex gap-2'>
          <Heart size='20' className='min-w-[20px]' />
        </div>
      </div>
      <div className='min-w-[33.333%] flex flex-col justify-center items-center gap-4'>
        <div className='flex gap-8'>
          <Shuffle size='20' className='min-w-[20px]' />
          <SkipBack size='20' className='min-w-[20px]' />
          <Play size='20' className='min-w-[20px]' />
          <SkipForward size='20' className='min-w-[20px]' />
          <Repeat2 size='20' className='min-w-[20px]' />
        </div>
        <div className='max-w-[380px] w-full flex items-center justify-center gap-2'>
          <p className=' text-xs text-white/50'>2:10</p>
          <div className='w-full h-[4px] rounded-full bg-white/10 relative'>
            <div className='w-10/12 h-full rounded-full bg-white absolute' />
          </div>
          <p className=' text-xs text-white/50'>2:30</p>
        </div>
      </div>
      <div className='min-w-[33.333%] flex justify-end'>
        <div className='flex gap-4'>
          <PlaySquare size='20' className='min-w-[20px]' />
          <Mic2 size='20' className='min-w-[20px]' />
          <ListMusic size='20' className='min-w-[20px]' />
          <Speaker size='20' className='min-w-[20px]' />
          <Volume1 size='20' className='min-w-[20px]' />
          <div className='w-[80px] flex items-center gap-2'>
            <div className='w-full h-[4px] rounded-full bg-white/10 relative'>
              <div className='w-7/12 h-full rounded-full bg-white absolute' />
            </div>
          </div>
          <Maximize2 size='20' className='min-w-[20px]' />
        </div>
      </div>
    </section >
  )
}