import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/utils/cn'
import { BoxReveal } from '@/components/ui/BoxReveal'
import { reviews } from './config'


export function Reviews() {
  // const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50, }, [Autoplay()])

  return (
    <section
      className={cn(
        'max-w-[1440px] 1.5xl:w-[1440px] 1.5xl:mx-auto pt-10 pb-20 relative ',
        'flex flex-col gap-8'
      )}
    >
      <div
        className='absolute top-0 left-0 right-0 bg-white h-px z-[2]'
      >
        <div
          className='w-[20vw] h-4 bg-white absolute top-0 right-6 md:right-10 lg:right-8 rounded-b-xl'
        />
      </div>

      <div className='absolute inset-0 z-[0]'>
        <div className='absolute inset-0'>
          <img
            src='/images/fly_plane.gif'
            className='w-full h-full'
          />
        </div>

        <div className='absolute inset-0 backdrop-blur-2xl bg-black/50'>

        </div>
      </div>

      <BoxReveal
        width='fit-content'
        className={cn(
          'mt-5 px-6 md:px-10 lg:mt-[72px] lg:px-8 1.5xl:mt-[88px]',
          'whitespace-nowrap font-semibold text-fierly h-min',
          'text-xl leading-[25px]',
          'md:text-2xl md:leading-[30px]',
          'lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <h2>Отзывы наших клиентов</h2>
      </BoxReveal>

      <section className="embla w-full">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {reviews.map((review, idx) => (
              <article
                key={idx}
                className="embla__slide py-2"
              >
                <div className={cn(
                  'embla__slide__number bg-black relative',
                  'rounded-3xl px-5 py-6 flex flex-col gap-2',
                  'hover:scale-[0.98] transition-all shadow-slate-500 hover:shadow-fierly shadow-sm'
                )}>
                  <div className={cn(
                    'absolute w-[30%] h-[45%] z-0',
                    idx % 2 === 0 ? 'top-4 -right-4  ' : 'bottom-3 left-4'
                  )}>
                    <div className='w-2/3 h-1/3 border-2 border-fierly opacity-50 absolute top-0 left-5' />
                    <div className='h-2/3 w-1/3 border-2 border-fierly opacity-60 -rotate-12' />
                  </div>

                  <div className='flex gap-3 items-center relative z-[4]'>
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className='w-16 h-16 rounded-full'
                    />

                    <div className='flex flex-col gap-2 text-fierly'>
                      <p className='text-lg  leading-none font-bold'>
                        {review.name}
                      </p>
                      <p className='text-sm leading-none opacity-80'>
                        {review.status}
                      </p>
                    </div>
                  </div>

                  <p className='font-bold relative z-[5]'>
                    {review.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
