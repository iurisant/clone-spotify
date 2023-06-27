import Image, { StaticImageData } from 'next/image';

import AlbumCover from '@/img/albumcover.jpg';

export default function ModalMusicSuggestion({ title, url }: { title: string, url: string | StaticImageData }) {
  return (
    <a href='#' className='flex items-center bg-white/10 rounded'>
      <Image
        className='rounded-l lg:w-[72px]'
        src={url}
        alt={title}
        width={50}
        height={50}
      />
      <span className='px-4 text-sm font-semibold min-w-24 w-auto truncate'>{title}</span>
    </a>
  )
}