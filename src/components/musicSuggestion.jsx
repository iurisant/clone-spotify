import ModalMusicSuggestion from "@/components/modalMusicSuggestion";
import AlbumCover from '@/img/albumcover.jpg';

export default function MusicSuggestion() {
  return (
    <section className='grid grid-rows-3 grid-flow-col gap-3 overflow-hidden px-4 w-full lg:h-60 2xl:max-w-screen-2xl '>
      <ModalMusicSuggestion title='Happier Than Ever' url={AlbumCover} />
      <ModalMusicSuggestion title='Billie Eilish' url={AlbumCover} />
      <ModalMusicSuggestion title='Happier Than Ever' url={AlbumCover} />
      <ModalMusicSuggestion title='Billie Eilish' url={AlbumCover} />
      <ModalMusicSuggestion title='Happier Than Ever' url={AlbumCover} />
      <ModalMusicSuggestion title='Billie Eilish' url={AlbumCover} />
    </section >
  )
}