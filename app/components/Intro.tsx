import { cn } from '@/utils/cn';
import { Hieroglyph1Icon } from './icons/Hieroglyph1Icon';
import { scrollToBlockByID } from '../utils';
import { anchors } from '../configs/anchors';


export function Intro() {

  return (
    <section
      className={cn(
        'cont',
        'h-full flex flex-col grow text-foreground relative',
        'md:flex-row md:min-h-[calc(100vh-var(--header-desktop-height))]'

      )}
    >
      <div className='flex flex-col grow relative z-[5] md:w-1/2 md:self-center'>
        <div className='flex flex-col grow'>
          <h1
            className={cn(
              'basepaddings md:px-0',
            )}
          >
            <div
              className={cn(
                'flex flex-col text-center pt-8 md:pt-0 [text-shadow:_0_10px_10px_black]',
                'font-bold font-plex text-[32px] leading-[34px]'
              )}
            >
              <span>Оптовые поставки</span>
              <div className='tracking-tighter flex gap-1.5 items-center justify-center flex-wrap'>
                <div className='bg-mainred px-2 py-1.5 rounded-full'>
                  <p className='-mt-2 whitespace-nowrap'>любых товаров</p>
                </div>
                <p className='-mt-2 whitespace-nowrap'> из Китая</p>
              </div>
            </div>
          </h1>

          <div
            className={cn(
              'basepaddings md:px-0',
              'pt-8'
            )}
          >
            <p
              className={cn(
                'text-center text-gray-400 [text-shadow:_0_6px_6px_black] font-medium md:font-semibold font-suisse text-[22px] leading-[24px] max-w-[481px] mx-auto'
              )}
            >
              Бесплатно найдем нужный товар, проверим качество, подготовим фотоотчет,
              безопасно выкупим необходимую партию и в срок доставим в нужный вам город
            </p>
          </div>
        </div>

        <div className='cont mt-5 h-[460px] -mb-1 md:hidden'>
          <img
            src='/images/chinese_house.png'
            className={cn(
              'w-full h-full object-contain'
            )}
          />
        </div>
      </div>

      <div className='pb-5 basepaddings relative z-[5] md:w-1/2 md:flex md:items-end flex-col justify-end'>
        <div className='hidden h-[460px] -mb-1 md:block mx-auto'>
          <img
            src='/images/chinese_house.png'
            className={cn(
              'w-full h-full object-contain'
            )}
          />
        </div>
        <button
          onClick={(evt) => {
            evt.preventDefault()
            scrollToBlockByID({ id: anchors.feedback.href })
          }}
          className={cn(
            'basepaddings btn',
            'w-full md:max-w-[500px] mx-auto'
          )}
        >
          Оставить заявку
        </button>
      </div>

      <div
        key='lighting'
        className='absolute inset-0 z-[3]'
      >

        <Hieroglyph1Icon className='animate-float absolute top-10 left-5 z-[3] text-fierly' />
        <Hieroglyph1Icon className='animate-float absolute top-20 right-5 z-[3] text-mainred w-12 h-12' />
        <Hieroglyph1Icon className='animate-float absolute top-80 left-16 z-[3] text-fierly w-8 h-8' />

        <div
          className='absolute inset-0 z-[2] backdrop-blur-[60px]'
        />

        <div
          className='md:hidden w-[70%] h-[30%] bg-fierly opacity-70 animate-pulse rounded-full absolute z-[1] bottom-[120px] left-1/2 -translate-x-1/2'
        />

        <div
          className='hidden md:block w-[40%] h-[50%] bg-fierly opacity-70 animate-pulse rounded-full absolute z-[1] top-1/2 -translate-y-1/2 1.5xl:right-40 right-0'
        />
      </div>
    </section>
  )
}