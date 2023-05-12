import MusicSuggestion from '@/components/musicsuggestion';
import HeaderMobile from "@/components/mobile/header";
import TagList from '@/components/mobile/taglist';
import Albums from '@/components/albums';
import Menu from '@/components/mobile/menu';

export default function Home() {
  return (
    <main className='flex flex-col items-stretch max-w-max w-full justify-center px-4'>
      <HeaderMobile />
      <TagList />
      <MusicSuggestion />
      <div className='mb-24'>
        <Albums />
        <Albums />
        <Albums />
        <Albums />
        <Albums />
        <Albums />
      </div>
      <Menu />
    </main>
  )
}
