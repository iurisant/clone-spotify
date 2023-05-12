import MusicSuggestion from '@/components/musicsuggestion';
import HeaderMobile from "@/components/mobile/header";
import TagList from '@/components/mobile/taglist';
import Albums from '@/components/albums';
import Menu from '@/components/mobile/menu';

export default function Home() {
  return (
    <main className='flex flex-col justify-center px-4'>
      <HeaderMobile />
      <TagList />
      <MusicSuggestion />
      <Albums />
      <Albums />
      <Menu />
    </main>
  )
}
