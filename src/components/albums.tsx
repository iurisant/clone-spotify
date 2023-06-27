'use client'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import PostAlbum from "@/components/postAlbum";
import ImgAlbum from "@/img/albumcover2.jpg";

export default function Albums({ index, title }: { index: string, title: string }) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 15,
    },
  })
  return (
    <section className='overflow-hidden mt-8 w-full 2xl:max-w-screen-2xl'>
      <div className='flex flex-col justify-between'>
        <h1 className='font-bold text-2xl truncate mb-4 ml-4'>
          {title}
        </h1>
        <div ref={ref} className='keen-slider'>
          <div className='min-w-[140px] ml-4 keen-slider__slide number-slide1'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide2'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide3'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide4'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide5'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide6'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide7'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide8'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide9'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
          <div className='min-w-[140px] keen-slider__slide number-slide10'>
            <PostAlbum
              url={ImgAlbum}
              description='Billie Eilish, C418, Tame Impala and more'
            />
          </div>
        </div >
      </div >
    </section>
  )
}