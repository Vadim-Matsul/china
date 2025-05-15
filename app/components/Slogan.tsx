import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'
import { useLayoutEffect, useRef } from 'react'

type Props = {}

export function Slogan({ }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    const videoEL = videoRef.current;
    if (!videoEL) return;

    videoEL.controls = false;
    videoEL.playsInline = true;
    videoEL.muted = true;
    videoEL.defaultMuted = true
    videoEL.autoplay = true;
    videoEL.loop = true;

    videoEL.play().catch((reason) => {
      console.log('Ошибка автозапуска: ', reason)
    })

    function onPlay(evt: any) {
      evt.preventDefault();
      if (!videoEL) return;

      // @ts-ignore
      console.info('onPlay webkitDisplayingFullscreen', videoEL.webkitDisplayingFullscreen)

      // @ts-ignore
      if (videoEL.webkitDisplayingFullscreen && typeof videoEL.webkitDisplayingFullscreen == 'function') {
        // @ts-ignore
        videoEL.webkitExitFullscreen();
      }
    }
    videoEL.addEventListener('play', onPlay);
    return () => {
      videoEL?.removeEventListener('play', onPlay)
    }
  }, [])

  return (
    <section className={cn('mx-auto mt-8 max-w-[1440px] overflow-x-hidden md:mt-3')}>
      <div>
        <h1
          // key='Превращаем ресурсы в цифровые активы'
          className={cn(
            'mx-auto text-center font-medium flex flex-col gap-2 flex-wrap justify-center items-center',
            'text-[28px] leading-[30.24px]',
            'md:text-[42px] md:leading-[45.36px]',
            'lg:text-7xl lg:leading-[79.20px]'
          )}
        >
          <span>Оптовые поставки товаров</span>
          <div className='flex items-center'>
            <span>из</span>
            <BoxReveal width='fit-content'>
              <span className='text-fierly'>&nbsp;Китая</span>
            </BoxReveal>
          </div>
        </h1>

        <p
          className={cn(
            'mx-auto mt-8 text-center text-light-gray',
            'max-w-[300px] text-xs',
            'md:max-w-[550px] md:text-base md:leading-[21.12px]'
          )}
        >
          Какое-то описание
          ( Пример: Мы позволяем обходить большинство сложностей современной Российской экономики и помогаем в
          построении взаимовыгодных связей мировым финансовым институция. )
        </p>
      </div>

      <div key='slogan video' className={cn('relative mt-12 lg:mt-20 1.5xl:mt-24')}>
        <video
          ref={videoRef}
          controls={false}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{ background: 'transparent' }}
          className={cn(
            'flex h-full max-h-[274px] w-full justify-center object-center',
            'md:mx-auto md:scale-x-150',
            'lg:max-h-[400px] lg:scale-x-125',
            '1.5xl:max-h-[528px]'
          )}
        >
          <source src='grid.mp4' type='video/mp4' />
          Ваш браузер не поддерживает видео. Пожалуйста, обновите его.
        </video>

        <div
          key='scroll down'
          className={cn(
            'absolute flex items-center gap-2 text-light-gray',
            'bottom-0 left-6 xs:left-[15vw] md:bottom-7 md:left-[10vw] lg:bottom-14'
          )}
        >
          <p className='text-xs font-medium uppercase leading-[13.92px] tracking-wide'>
            scroll down
          </p>

          <svg width='9' height='10' fill='none' viewBox='0 0 9 10'>
            <path
              fill='currentColor'
              d='M3.938.5v6.846L.796 4.204 0 5l4.5 4.5L9 5l-.796-.796-3.142 3.142V.5H3.938Z'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
