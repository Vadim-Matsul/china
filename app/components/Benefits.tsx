import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

const benefits = [
  {
    title: (
      <h4>
        Уверенность <br />в оплате
      </h4>
    ),
    desc: <p>
      Токены с реальным обеспечением гарантируют поставщику оплату <br className='hidden lg:block' />без рисков.
    </p>,
  },
  {
    title: (
      <h4>
        Прозрачность <br />
        сделок
      </h4>
    ),
    desc: <p className='max-w-[280px]'>
      Все этапы выполнения контракта фиксируются <br className='hidden lg:block' /> на платформе, исключая спорные моменты.
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
      Токенизация активов защищает от валютной волатильности <br className='hidden lg:block' /> и возможных финансовых санкций.
    </p>,
  },
  {
    title: (
      <h4>
        Эффективность <br />
        операций
      </h4>
    ),
    desc: <p className='max-w-[260px]'>
      Инновационные <br className='hidden lg:block' /> технологии INDX упрощают <br className='hidden lg:block' /> процесс сделки, экономя <br className='hidden lg:block' /> время и ресурсы.
    </p>,
  },
]

type Props = {}

export function Benefits({ }: Props) {
  return (
    <section
      className={cn('mx-auto mt-12 max-w-[1440px] px-6 md:px-10 lg:mt-20 lg:px-8 1.5xl:mt-24')}
    >
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
          'mt-8 flex flex-col gap-6',
          'md:flex-row md:flex-wrap md:justify-between',
          'lg:mt-12'
        )}
      >
        {benefits.map((benefit, idx) => {
          return (
            <li
              key={idx}
              className={cn('border-t border-t-[#b9b9c2] pt-2', 'md:w-[48%] md:pt-3', 'lg:w-[23%]')}
            >
              <div className='font-plex text-xs font-medium uppercase leading-[13.92px] tracking-wide text-fierly'>
                0{idx + 1}
              </div>

              <div
                className={cn(
                  'font-semibold',
                  'mt-2 text-sm leading-[17.36px] md:mt-3',
                  'lg:text-xl lg:leading-[25px]'
                )}
              >
                {benefit.title}
              </div>

              <h5
                className={cn(
                  'text-light-gray',
                  'mt-2 max-w-[350px] text-xs leading-none md:mt-3',
                  'lg:text-base lg:leading-[21px]'
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
