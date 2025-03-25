import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

type Props = {}

export function Resale({ }: Props) {
  return (
    <section
      className={cn(
        'mx-auto max-w-[1440px]',
        'mt-12 lg:mt-20 1.5xl:mt-24',
        'px-6 md:px-10 lg:px-8',
        'flex flex-col gap-8 md:flex-row md:justify-between lg:flex-col lg:gap-16'
      )}
    >
      <h3
        className={cn(
          'font-semibold text-fierly h-min',
          'max-w-[260px] text-xl leading-[25px]',
          'md:max-w-[340px] md:text-2xl md:leading-[30px] md:sticky md:top-20',
          'lg:max-w-[370px] lg:text-[28px] lg:leading-[35px] lg:static'
        )}
      >
        <BoxReveal
          width='fit-content'
          duration={1}
        >
          <span>Перепродажа / сжигание</span>
        </BoxReveal>
        <BoxReveal
          width='fit-content'
          duration={1}
        >
          <span>токена</span>
        </BoxReveal>
      </h3>

      <ul className='flex flex-col gap-6 md:max-w-[332px] lg:max-w-none lg:flex-row lg:justify-between'>
        <li
          key='Комиссия за эмиссию и сжигание токена'
          className='border-t border-t-[#b9b9c2] pt-3 lg:w-[33%]'
        >
          <div className='flex items-start gap-[18px] lg:gap-8'>
            <svg
              className='h-5 w-5 lg:h-[30px] lg:min-h-[30px] lg:w-[30px] lg:min-w-[30px]'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                fill='currentColor'
                d='M4.375 13.857h-1.25v2.572h1.25v-2.572Zm2.5-1.285h-1.25v3.857h1.25v-3.857ZM9.375 10h-1.25v6.429h1.25V10Zm2.5-2.571h-1.25v9h1.25v-9Zm2.5 3.857h-1.25v5.143h1.25v-5.143Zm2.5-2.572h-1.25v7.715h1.25V8.714ZM0 1v18h20V1H0Zm3.75 1.286c.345 0 .625.288.625.643 0 .355-.28.643-.625.643a.634.634 0 0 1-.625-.643c0-.355.28-.643.625-.643Zm-1.875 0c.345 0 .625.288.625.643 0 .355-.28.643-.625.643a.634.634 0 0 1-.625-.643c0-.355.28-.643.625-.643ZM18.75 17.714H1.25V4.857h17.5v12.857Zm0-14.142H5.625V2.286H18.75v1.286Z'
              />
            </svg>

            <h4
              className={cn(
                'max-w-[270px] text-sm font-semibold leading-[17.36px] md:max-w-none lg:h-[77px] lg:max-w-[240px] lg:text-xl lg:leading-[25px]'
              )}
            >
              Комиссия за эмиссию и сжигание токена
            </h4>
          </div>

          <p className='mt-8 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px] 1.5xl:max-w-[90%]'>
            Комиссия взимается за&nbsp;каждую эмиссию токена, обеспеченного реальным активом,
            или&nbsp;за&nbsp;его&nbsp;сжигание при&nbsp;выкупе ресурса. Эти&nbsp;сборы создают устойчивую доходную базу и&nbsp;способствуют
            поддержанию ликвидности системы.
          </p>
        </li>

        <li
          key='Комиссия за использование контрактов'
          className='border-t border-t-[#b9b9c2] pt-3 lg:w-[33%]'
        >
          <div className='flex items-start gap-[18px] lg:gap-8'>
            <svg
              className='h-5 w-5 lg:h-[30px] lg:min-h-[30px] lg:w-[30px] lg:min-w-[30px]'
              width='20'
              height='16'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                fill='currentColor'
                d='M18.125 11.077V7.385h-7.5V4.923H12.5V0h-5v4.923h1.875v2.462h-7.5v3.692H0V16h5v-4.923H3.125V8.615h6.25v2.462H7.5V16h5v-4.923h-1.875V8.615h6.25v2.462H15V16h5v-4.923h-1.875ZM3.75 12.307v2.462h-2.5v-2.461h2.5Zm7.5 0v2.462h-2.5v-2.461h2.5Zm-2.5-8.615V1.231h2.5v2.461h-2.5Zm10 11.077h-2.5v-2.461h2.5v2.461Z'
              />
            </svg>

            <h4
              className={cn(
                'max-w-[270px] text-sm font-semibold leading-[17.36px] md:max-w-none lg:h-[77px] lg:max-w-[220px] lg:text-xl lg:leading-[25px]'
              )}
            >
              Комиссия <br className='hidden lg:block' /> за использование контрактов
            </h4>
          </div>

          <p className='mt-8 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px] 1.5xl:max-w-[90%]'>
            При&nbsp;создании и&nbsp;исполнении смарт-контрактов для&nbsp;проведения сделок с&nbsp;токенами пользователи
            платят небольшую комиссию. Эти&nbsp;смарт-контракты гарантируют выполнение
            обязательств и&nbsp;обеспечивают безопасные транзакции, предоставляя дополнительный доход компании.
          </p>
        </li>

        <li
          key='Проценты с резервов обеспечения'
          className='border-t border-t-[#b9b9c2] pt-3 lg:w-[33%]'
        >
          <div className='flex items-start gap-[18px] lg:gap-8'>
            <svg
              className='h-5 w-5 lg:h-[30px] lg:min-h-[30px] lg:w-[30px] lg:min-w-[30px]'
              width='20'
              height='20'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                fill='currentColor'
                d='M9.809 15 17.5 8.27V6.198L10 12.5 6.476 7.64 2.5 10.821v1.952l3.75-2.82L9.809 15ZM0 1.25v17.5h20V1.25H0ZM3.75 2.5a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Zm-1.875 0a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25Zm16.875 15H1.25V5h17.5v12.5Zm0-13.75H5.625V2.5H18.75v1.25Z'
              />
            </svg>

            <h4
              className={cn(
                'max-w-[220px] text-sm font-semibold leading-[17.36px] md:max-w-[200px] lg:h-[77px] lg:max-w-[300px] lg:text-xl lg:leading-[25px]'
              )}
            >
              Проценты с&nbsp;резервов обеспечения
            </h4>
          </div>

          <p className='mt-8 text-xs text-light-gray xs:max-w-[80%] md:max-w-none lg:mt-8 lg:text-sm lg:leading-[19px] 1.5xl:max-w-[90%]'>
            Резервы, хранящиеся для&nbsp;обеспечения токенов, могут быть размещены в&nbsp;безопасных
            и&nbsp;доходных инструментах, таких&nbsp;как&nbsp;облигации или&nbsp;высоконадежные инвестиции. Полученные
            проценты используются для&nbsp;поддержания финансовой устойчивости проекта, покрытия
            операционных расходов и&nbsp;дальнейшего развития экосистемы.
          </p>
        </li>
      </ul>
    </section>
  )
}
