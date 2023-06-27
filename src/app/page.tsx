'use client'
import MusicSuggestion from '@/components/musicsuggestion';
import HeaderMobile from "@/components/mobile/header";
import Albums from '@/components/albums';
import MenuMobile from '@/components/mobile/menuMobile';
import MenuWeb from '@/components/web/menuWeb';
import { useEffect, useState } from 'react';

export default function Home() {
  const [tamanhoTela, setTamanhoTela] = useState('');

  useEffect(() => {
    const verificaTamanhoTela = () => {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        setTamanhoTela('mobile');
      } else {
        setTamanhoTela('desktop');
      }
    };

    verificaTamanhoTela();

    window.addEventListener('resize', verificaTamanhoTela);

    return () => {
      window.removeEventListener('resize', verificaTamanhoTela);
    };
  }, []);

  return (
    <main className='flex flex-col items-stretch max-w-full justify-center'>
      <HeaderMobile />
      <MusicSuggestion />
      <section className='mb-32'>
        <Albums index="fy" title="Seus mix mais ouvidos" />
        <Albums index="fy" title="Feito para você" />
        <Albums index="fy" title="Descoberta da semana" />
        <Albums index="fy" title="Pop" />
        <Albums index="fy" title="Podcasts" />
        <Albums index="fy" title="Estações de rádio" />
        <Albums index="fy" title="Hits do momento" />
        <Albums index="fy" title="Músicas Brasileiras" />
        <Albums index="fy" title="Hip Hop" />
        <Albums index="fy" title="Paradas" />
      </section>
      {(tamanhoTela === 'mobile') && (<MenuMobile title='Helmet' album='Steve Lacy' />)}
      {(tamanhoTela === 'desktop') && (<MenuWeb title='Helmet' album='Steve Lacy' />)}
    </main>
  )
}
