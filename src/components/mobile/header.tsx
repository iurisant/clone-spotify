import Image from 'next/image';

import Sino from '../../img/sino.svg';
import Relogio from '../../img/relogio.svg';
import Engrenagem from '../../img/engrenagem.svg';

export default function HeaderMobile() {
  return (
    <header className='flex justify-between items-center mt-6'>
      <h1 className='font-bold text-2xl truncate'>
        Good afternoon
      </h1>
      <div className='grid grid-flow-col gap-6 items-center'>
        <a href="#">
          <Image
            src={Sino}
            alt="Sino"
            className='min-w-6 min-h-6'
          />
        </a>
        <a href="#">
          <Image
            src={Relogio}
            alt="Sino"
            className='min-w-6 min-h-6'
          />
        </a>
        <a href="#">
          <Image
            src={Engrenagem}
            alt="Sino"
            className='min-w-6 h-6'
          />
        </a>
      </div>
    </header>
  )
}