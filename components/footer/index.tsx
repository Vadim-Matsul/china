import { cn } from '@/utils/cn'
import { useLayoutEffect, useRef } from 'react';

type Props = {}

export function Footer({ }: Props) {
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
    <section className={cn('mx-auto max-w-[1440px]')}>
      <svg
        className='mx-auto h-5 w-[60px] text-light-gray'
        width='60'
        height='20'
        fill='none'
        viewBox='0 0 60 20'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='m.017 19.866 7.18-9.831A.083.083 0 0 1 7.263 10h10.226a.08.08 0 0 0 .065-.034L24.813.034A.083.083 0 0 1 24.878 0h10.226a.08.08 0 0 1 .066.034l7.245 9.932a.08.08 0 0 0 .066.034h10.265a.08.08 0 0 1 .066.034l7.172 9.831c.04.056.001.135-.066.135h-5.129a.082.082 0 0 1-.067-.035l-5.814-8.114a.082.082 0 0 0-.066-.034h-2.434a.082.082 0 0 0-.066.034l-5.814 8.114a.082.082 0 0 1-.067.035H35.34c-.068 0-.107-.08-.066-.135l7.013-9.604c.04-.055.002-.134-.065-.134h-4.988a.084.084 0 0 1-.067-.035l-5.9-8.24a.082.082 0 0 0-.067-.035h-2.433a.082.082 0 0 0-.067.034l-5.882 8.241a.082.082 0 0 1-.066.035h-4.968a.084.084 0 0 0-.065.134l7.006 9.604c.04.056.002.135-.065.135h-5.13a.082.082 0 0 1-.066-.035l-5.814-8.114a.082.082 0 0 0-.066-.034H11.15a.082.082 0 0 0-.066.034L5.27 19.965a.082.082 0 0 1-.067.035H.083a.083.083 0 0 1-.066-.134Z'
          clipRule='evenodd'
        />
      </svg>

      <p className='mx-auto mt-7 text-center font-plex text-xs font-medium uppercase leading-[13.92px] tracking-wide text-light-gray'>
        Resource Stability
        <br />
        Blockchain Liquidity
      </p>

      <div className='mx-auto mt-7 w-min whitespace-nowrap text-center font-plex text-xs font-medium uppercase leading-[13.92px] tracking-wide'>
        <a href='mailto:INFO@indx.ru' className='text-fierly'>
          INFO@indx.ru
        </a>

        <p className='text-light-gray'>{new Date().getFullYear()}</p>
      </div>

      <div className='lg:h-[468px] 1.5xl:h-[682px]'>
        <video
          ref={videoRef}
          controls={false}
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          style={{ background: 'transparent' }}
          className={cn('h-full w-full object-contain')}
        >
          <source src='wave.mp4' type='video/mp4' />
          Ваш браузер не поддерживает видео. Пожалуйста, обновите его.
        </video>
      </div>
    </section>
  )
}
