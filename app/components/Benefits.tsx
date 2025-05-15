import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

const benefits = [
  {
    title: (
      <h4>
        Простота
      </h4>
    ),
    desc: <p>
      Просто оставьте заявку на необходимый товар, а все остальное сделаем мы
      Оформить заказ
    </p>,
  },
  {
    title: (
      <h4>
        Выгода
      </h4>
    ),
    desc: <p >
      Мы находимся в Китае и работаем с фабриками без посредников, поэтому вы получаете максимально возможные низкие цены
    </p>,
  },
  {
    title: (
      <h4>
        Снижение <br />
        рисков
      </h4>
    ),
    desc: <p>
      С нами вы избавляетесь от любых рисков и получаете гарантию на необходимый товар, доставку и последующее сопровождение
    </p>,
  },
  {
    title: (
      <h4>
        Отсрочка платежа
      </h4>
    ),
    desc: <p>
      Оплачивайте любым удобным способом лишь часть суммы, а оставшуюся сумму по мере доставки товара на ваш адрес
    </p>,
  },
]

type Props = {}

export function Benefits({ }: Props) {
  return (
    <section
      className={cn('mx-auto max-w-[1440px] pt-12 pb-16 px-6 md:px-10 lg:pt-20 lg:px-8 1.5xl:pt-24 relative overflow-hidden')}
    >
      <div className='absolute top-[300px] right-3 w-[150px] h-[150px]'>
        <div className='w-[250px] h-[250px] border-fierly border-2 rounded-full opacity-45 absolute top-0 -rotate-3' />
        <div className='w-[180px] h-[180px] border-fierly border-2 rounded-full opacity-70 absolute -top-[80px] -left-11 rotate-12' />
      </div>

      <div
        className='absolute top-0 left-0 right-0 bg-white h-px z-[2]'
      >
        <div
          className='w-[20vw] h-4 bg-white absolute top-0 left-6 md:left-10 lg:left-8 rounded-b-xl'
        />
      </div>

      <BoxReveal
        width='fit-content'
        duration={0.9}
        className={cn(
          'font-semibold text-fierly h-min',
          'text-xl leading-[25px]',
          'md:text-2xl md:leading-[30px]',
          'lg:max-w-[280px] lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <h3>Наши преимущества</h3>
      </BoxReveal>

      <ul
        className={cn(
          'mt-8 flex flex-col gap-6 gap-y-10',
          'md:flex-row md:flex-wrap md:justify-between',
          'lg:mt-12'
        )}
      >
        {benefits.map((benefit, idx) => {
          return (
            <li
              key={idx}
              className={cn(' pt-2', 'md:w-[48%] md:pt-3 hover:scale-105 transition-all select-none', 'lg:w-[23%]')}
            >
              <div className='font-plex text-sm font-bold uppercase leading-[13.92px] tracking-wide text-fierly'>
                0{idx + 1}
              </div>
              <BoxReveal
                width='fit-content'
                duration={0.9}
                // boxColor='black'
                className={cn(
                  'font-semibold text-fierly h-min mt-1',
                  'text-xl leading-[25px]'
                )}
              >
                <p
                  className='animate-text-gradient [text-shadow:none] bg-gradient-to-r from-[#f0eae3] via-[#FFD700] to-[#f0eae3] bg-clip-text text-transparent'
                >
                  {benefit.title}
                </p>
              </BoxReveal>

              <h5
                className={cn(
                  'mt-2 text-foreground font-semibold',
                  'text-base leading-[21px]'
                )}
              >
                {benefit.desc}
              </h5>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
