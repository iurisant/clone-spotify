import Image, { StaticImageData } from 'next/image';

export default function PostAlbum({ description, url }: { description: string, url: string | StaticImageData }) {
  return (
    <a href='#' className="flex flex-col w-36">
      <Image
        className='w-72 h-auto'
        src={url}
        alt="Logo Spotify"
        width={100}
        height={100}
      />
      <span className='mt-2 text-xs text-white/70 w-36 min-w-24'>{description}</span>
    </a>
  )
}