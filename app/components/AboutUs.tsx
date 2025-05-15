import { cn } from '@/utils/cn'
import { Hieroglyph1Icon } from './icons/Hieroglyph1Icon'
import { anchors } from '../configs/anchors'

type Props = {}

export function AboutUs({ }: Props) {


  return (
    <section
      className={cn(
        'cont basepaddings flex',
        'flex flex-col grow text-foreground relative py-10',
      )}
    >
      <Hieroglyph1Icon className='absolute top-[5%] right-[5%] text-fierly animate-pulse z-0' />
      <Hieroglyph1Icon className='absolute top-1/2 left-1/5 text-fierly animate-pulse z-0' />
      <Hieroglyph1Icon className='absolute bottom-5 right-40 text-fierly animate-pulse z-0' />

      <div className='max-w-[560px] mx-auto relative z-[5]'>
        <h2
          id={anchors.about.href}
          className='bg-mainred font-bold shadow-sm shadow-white -rotate-12 px-8 [text-shadow:_0_2px_2px_black] py-2 text-[36px] leading-none w-min rounded-full whitespace-nowrap'
        >
          О нас
        </h2>

        <div >
          <div className='ml-16 w-[100px] h-1 rounded-full inline-block' />

          <span
            className='text-[20px] font-medium leading-[21px]'
          >
            &nbsp;Мы специализируемся на доставке самого разнообразного оборудования, машин и товаров, обеспечивая нашим клиентам высокий уровень сервиса и надежности. Наш богатый опыт и профессионализм позволяют нам успешно находить производителя и привозить абсолютно любое оборудование или же товар.
          </span>
        </div>
      </div>
    </section>
  )
}


