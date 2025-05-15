import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'
import { InstagramIcon } from './icons/InstagramIcon'
import { TelegramIcon } from './icons/TelegramIcon'
import { WAIcon } from './icons/WAIcon'
import { Button } from '@nextui-org/react'


type Props = {}

export function Contacts({ }: Props) {
  return (
    <section
      className={cn('max-w-[1440px] bg-red-500/20 1.5xl:mx-auto 1.5xl:w-[1440px] relative overflow-hidden')}
    >
      <section className='absolute inset-0 z-[3]'>
        <div className='absolute inset-0 z-[0]'>
          <img
            src='/images/china_flag.jpg'
            className='w-full h-full object-cover opacity-40'
          />
        </div>

        <div className='absolute inset-0 z-[1] backdrop-blur-[8px]' />
      </section>

      <section
        className={cn(
          'pt-12 pb-16 px-6 md:px-10 lg:pt-20 lg:px-8 1.5xl:pt-24 h-[300px] relative z-[5] w-full'
        )}
      >
        <BoxReveal
          width='fit-content'
          duration={0.9}
          className={cn(
            'font-semibold text-fierly h-min mx-auto',
            'text-xl leading-[25px]',
            'md:text-2xl md:leading-[30px]',
            'lg:max-w-[280px] lg:text-[28px] lg:leading-[35px]'
          )}
        >
          <h3
            className='font-bold select-none text-3xl animate-text-gradient [text-shadow:none] bg-gradient-to-r from-[#f0eae3] via-[#FFD700] to-[#f0eae3] bg-clip-text text-transparent'
          >
            Не знаете с чего начать?
          </h3>
        </BoxReveal>

        <p className='text-xl leading-[24px] text-center font-bold mt-4 [text-shadow:_0_4px_4px_black]'>
          Оставьте заявку на консультацию, и наш специалист свяжется с вами в ближайшее время и бесплатно проконсультирует вас
        </p>

        <div className='flex gap-6 items-center justify-center mt-10'>
          <button className='w-12 h-12 bg-red-500 flex items-center justify-center'>
            <InstagramIcon />
          </button>

          <button className='w-12 h-12 bg-red-500 flex items-center justify-center'>
            <div className='w-[30px] h-[30px] scale-[1.4]'>
              <TelegramIcon />
            </div>
          </button>

          <button className='w-12 h-12 bg-red-500 flex items-center justify-center'>
            <WAIcon />
          </button>
        </div>
      </section>
    </section>
  )
}
