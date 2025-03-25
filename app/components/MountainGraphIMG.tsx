import { cn } from '@/utils/cn'

type Props = {}

export function MountainGraphIMG({ }: Props) {
  return (
    <section
      className={cn(
        'relative mx-auto max-w-[1440px]',
        'mt-12 lg:mt-20 1.5xl:mt-24',
        'h-[267px] md:h-[300px] lg:h-[513px] 1.5xl:h-[569px]'
      )}
    >
      <img src='/images/mountain_graph.png' className='relative z-[2] h-full w-full object-cover md:object-fill' />
    </section>
  )
}
