import { Accordion, AccordionItem } from '@nextui-org/react'

import { cn } from '@/utils/cn'
import { BoxReveal } from '@/components/ui/BoxReveal'

type Props = {}

export function InteractionScheme({ }: Props) {
  return (
    <section
      className={cn(
        'relative mx-auto max-w-[1440px]',
        'mt-12 lg:mt-20 1.5xl:mt-24',
        'px-6 md:px-10 lg:px-8',
        'flex flex-col gap-8 md:flex-row md:justify-between'
      )}
    >
      <h3
        className={cn(
          'font-semibold text-fierly h-min',
          'text-xl leading-[25px]',
          'md:text-2xl md:leading-[30px] md:sticky md:top-20',
          'lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <BoxReveal
          duration={0.7}
          width='fit-content'
        >
          <span>Схема</span>
        </BoxReveal>
        <BoxReveal
          duration={0.7}
          width='fit-content'
        >
          <span>взаимодействия</span>
        </BoxReveal>
      </h3>

      <div className='flex flex-col gap-10 md:max-w-[332px] lg:max-w-none lg:flex-row lg:gap-6 '>
        <div
          key='Соотношение ресурса и токена всегда 1:1'
          className='border-t border-t-[#9f9fb8] pt-2 md:pt-3 lg:w-[304px] lg:pt-4'
        >
          <h4
            className={cn(
              'text-sm font-semibold leading-[17.36px]',
              'lg:h-[50px] lg:text-xl lg:leading-[25px]'
            )}
          >
            Соотношение ресурса <br />и токена всегда 1:1
          </h4>

          <div className='mt-6 md:mt-8 lg:h-[256px] lg:min-h-[256px] 1.5xl:mt-6'>
            <div className='mr-3 inline-block h-2 w-12 bg-gradient-to-r from-fierly via-[#EDCEC9] via-60% to-[#eaeaec]' />

            <span className={cn('text-light-gray', 'text-xs leading-none', 'lg:text-sm')}>
              Каждый токен INDX выпускается строго в&nbsp;соотношении&nbsp;1:1 с&nbsp;обеспечением реальным
              ресурсом (например, золотом, нефтью&nbsp;или&nbsp;другим активом). Для&nbsp;эмиссии контрагент вносит
              ресурс в&nbsp;трастовый&nbsp;фонд, что&nbsp;фиксируется на&nbsp;блокчейне. Эмиссия подтверждается
              смарт-контрактом, гарантирующим открытость&nbsp;и&nbsp;уверенность.
            </span>
          </div>

          <Accordion
            variant='light'
            itemClasses={{
              base: 'outline-none',
              title: '',
              indicator: 'rotate-90 data-[open=true]:rotate-[270deg] transition-all',
              trigger: 'justify-between',
              content: 'pt-6 flex items-center justify-center',
            }}
            className='mt-7 md:mt-8 lg:mt-9 1.5xl:mt-7'
          >
            <AccordionItem
              title={
                <p
                  className={cn(
                    'font-plex font-medium uppercase',
                    'text-sm leading-normal tracking-wide'
                  )}
                >
                  Смотреть схему
                </p>
              }
            >
              <img src='/images/scheme_resourse_token.png' className='h-[300px]' />
            </AccordionItem>
          </Accordion>
        </div>

        <div
          key='Отправка груза'
          className='border-t border-t-[#9f9fb8] pt-2 md:pt-3 lg:w-[304px] lg:pt-4'
        >
          <h4
            className={cn(
              'text-sm font-semibold leading-[17.36px]',
              'lg:h-[50px] lg:text-xl lg:leading-[25px]'
            )}
          >
            Отправка груза
          </h4>

          <div className='mt-6 md:mt-8 lg:h-[256px] lg:min-h-[256px] 1.5xl:mt-6'>
            <div className='mr-3 inline-block h-2 w-12 bg-gradient-to-r from-fierly via-[#EDCEC9] via-60% to-[#EAEAEC]' />

            <span className={cn('text-light-gray', 'text-xs leading-none', 'lg:text-sm')}>
              Для&nbsp;исполнения контракта требуется собрать 2&nbsp;из&nbsp;3&nbsp;голосов. Голоса могут&nbsp;быть&nbsp;от&nbsp;покупателя&nbsp;(+1),
              подтверждающего получение товара&nbsp;или&nbsp;услуги, поставщика&nbsp;(+1),
              подтверждающего выполнение своих обязательств,&nbsp;и/или&nbsp;независимого аудита&nbsp;(+1), который
              проверяет выполнение условий сделки. Такой подход обеспечивает прозрачность, защищает
              интересы сторон и&nbsp;минимизирует риски конфликта.
            </span>
          </div>

          <Accordion
            variant='light'
            itemClasses={{
              base: 'outline-none',
              title: '',
              indicator: 'rotate-90 data-[open=true]:rotate-[270deg] transition-all',
              trigger: 'justify-between',
              content: 'pt-6 flex items-center justify-center',
            }}
            className='mt-7 md:mt-8 lg:mt-9 1.5xl:mt-7'
          >
            <AccordionItem
              title={
                <p
                  className={cn(
                    'font-plex font-medium uppercase',
                    'text-sm leading-normal tracking-wide'
                  )}
                >
                  Смотреть схему
                </p>
              }
            >
              <img src='/images/scheme_cargo.png' className='h-[300px]' />
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
