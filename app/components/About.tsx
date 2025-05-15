import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'

type Props = {}

export function About({ }: Props) {
  return (
    <section
      className={cn(
        'mx-auto mt-12 max-w-[1440px] px-6 md:px-10 lg:mt-20 lg:px-8 1.5xl:mt-24',
        'flex flex-col gap-8 xs:flex-row xs:justify-between'
      )}
    >
      <BoxReveal
        width='fit-content'
        className={cn(
          'whitespace-nowrap font-semibold text-fierly h-min',
          'text-xl leading-[25px]',
          'md:text-2xl md:leading-[30px]',
          'lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <h2>О нас</h2>
      </BoxReveal>

      <h3
        className={cn(
          'font-semibold',
          'max-w-[310px] text-sm leading-[17.36px] xs:max-w-[330px]',
          'lg:max-w-[715px] lg:text-[28px] lg:leading-[35px]',
          '1.5xl:max-w-[895px]'
        )}
      >
        Описание проекта / компании
      </h3>
    </section>
  )
}
