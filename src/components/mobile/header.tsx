'use client'
import { useEffect, useState } from 'react';

import { Bell } from 'lucide-react'
import { Clock3 } from 'lucide-react'
import { Settings } from 'lucide-react'
import TagList from '@/components/mobile/taglist';

export default function HeaderMobile() {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    function getHours() {
      const dataAtual = new Date();
      setHours(dataAtual.getHours())
    }

    getHours()
  }), [hours]

  return (
    <header className='bg-gradient-to-b from-sky-900 to-spotify-1'>
      <div className='flex justify-between items-center mt-6 px-4'>
        <h1 className='font-bold text-2xl truncate'>
          {(hours < 12) && (<>Bom Dia!</>)}
          {(hours >= 12 && hours < 18) && (<>Boa Tarde!</>)}
          {(hours >= 18) && (<>Boa Noite!</>)}
        </h1>
        <div className='grid grid-flow-col gap-6 items-center'>
          <a href="#">
            <Bell />
          </a>
          <a href="#">
            <Clock3 />
          </a>
          <a href="#">
            <Settings />
          </a>
        </div>
      </div>
      <TagList />
    </header>
  )
}