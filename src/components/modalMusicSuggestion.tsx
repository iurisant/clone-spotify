import Image, { StaticImageData } from 'next/image';

export default function ModalMusicSuggestion({ title, url }: { title: string, url: string | StaticImageData }) {
  return (
    <div className='flex items-center justify-between rounded bg-white/10 hover:bg-white/20'>
      <div className='flex items-center gap-4'>
        <Image
          className='rounded-l lg:w-[72px]'
          src={url}
          alt={title}
          width={50}
          height={50}
        />
        <span className='text-sm font-semibold min-w-24 w-auto truncate'>{title}</span>
      </div>
    </div>
  )
}