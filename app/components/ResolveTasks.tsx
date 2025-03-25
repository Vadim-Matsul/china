import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

type Props = {}

export function ResolveTasks({ }: Props) {
  return (
    <section
      className={cn(
        'mx-auto max-w-[1440px]',
        'mt-12 lg:mt-20 1.5xl:mt-24',
        'px-6 md:px-10 lg:px-8',
        'flex flex-col gap-8 lg:gap-16'
      )}
    >
      {/* <h3
        className={cn(
          'font-semibold text-fierly',
          'max-w-[150px] text-xl leading-[25px]',
          'md:max-w-[200px] md:text-2xl md:leading-[30px]',
          'lg:max-w-none lg:text-[28px] lg:leading-[35px]'
        )}
      >
        Какие задачи мы решаем ?
      </h3> */}

      <BoxReveal
        width='fit-content'
        duration={1.2}
        className={cn(
          'font-semibold text-fierly',
          'max-w-[150px] text-xl leading-[25px]',
          'md:max-w-[200px] md:text-2xl md:leading-[30px]',
          'lg:max-w-none lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <h3>Какие задачи мы решаем ?</h3>
      </BoxReveal>

      <ul className='flex flex-col gap-6 md:flex-row md:justify-between'>
        <li
          key='Снижение санкционных рисков фиатных платежей.'
          className='border-t border-t-[#b9b9c2] pt-2'
        >
          <h4
            className={cn(
              'max-w-[230px] text-sm font-semibold leading-[17.36px] md:h-14 md:max-w-[200px] lg:h-[77px] lg:max-w-[300px] lg:text-xl lg:leading-[25px]'
            )}
          >
            Снижение санкционных рисков фиатных платежей.
          </h4>

          <div className='mt-6 flex items-center justify-center lg:mt-8'>
            <img
              src='/images/figure1.png'
              className='h-[140px] w-[140px] lg:h-[208px] lg:w-[208px]'
            />
          </div>

          <p className='mt-6 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px]'>
            Блокчейн-технологии обходят санкции на&nbsp;фиатные&nbsp;платежи, обеспечивая безопасные
            международные операции и&nbsp;снижая риски заморозки средств.
          </p>
        </li>

        <li key='Расширение рынков потребления.' className='border-t border-t-[#b9b9c2] pt-2'>
          <h4
            className={cn(
              'max-w-[160px] text-sm font-semibold leading-[17.36px] md:h-14 lg:h-[77px] lg:max-w-[250px] lg:text-xl lg:leading-[25px]'
            )}
          >
            Расширение рынков потребления.
          </h4>

          <div className='mt-6 flex items-center justify-center lg:mt-8'>
            <img
              src='/images/figure2.png'
              className='h-[140px] w-[140px] lg:h-[208px] lg:w-[208px]'
            />
          </div>

          <p className='mt-6 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px]'>
            Токенизация ресурсов облегчает выход на&nbsp;международные рынки, повышает&nbsp;ликвидность и&nbsp;упрощает сделки с&nbsp;иностранными партнерами.
          </p>
        </li>

        <li
          key='Возможность держать активы в блокчейне без валютных рисков.'
          className='border-t border-t-[#b9b9c2] pt-2'
        >
          <h4
            className={cn(
              'max-w-[310px] text-sm font-semibold leading-[17.36px] md:h-14 md:max-w-[200px] lg:h-[77px] lg:max-w-[320px] lg:text-xl lg:leading-[25px]'
            )}
          >
            Возможность держать активы в&nbsp;блокчейне без&nbsp;валютных рисков.
          </h4>

          <div className='mt-6 flex items-center justify-center lg:mt-8'>
            <img
              src='/images/figure3.png'
              className='h-[140px] w-[140px] lg:h-[208px] lg:w-[208px]'
            />
          </div>

          <p className='mt-6 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px]'>
            Токены, обеспеченные реальными ресурсами, позволяют хранить&nbsp;активы в&nbsp;блокчейне,
            защищая&nbsp;от&nbsp;валютных колебаний и&nbsp;упрощая участие в&nbsp;глобальных сделках.
          </p>
        </li>
      </ul>
    </section>
  )
}
