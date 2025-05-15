import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    img: '/images/finger.png',
    title: 'Заказываете товар',
    desc: 'Оставляете заявку на необходимый вам товар и количество'
  },
  {
    img: '/images/fabric.png',
    title: 'Находим фабрику',
    desc: 'Ведем переговоры с фабрикой, уточняем все детали и выбиваем для вас лучшую цену'
  },
  {
    img: '/images/payment.png',
    title: 'Оплачиваете товар',
    desc: 'Вы можете оплатить товар любым удобным способом и даже воспользоваться отсрочкой платежа'
  },
  {
    img: '/images/box.png',
    title: 'Безопасно выкупаем товар',
    desc: 'Перед выкупом и отправкой проверяем качество каждой единицы товара, независимо от объема партии, делаем фотоотчет и доставляем на наш склад в Китае'
  },
  {
    img: '/images/car_send.png',
    title: 'Отправляем товар в ваш город',
    desc: 'Упаковываем в фирменную защитную упаковку и отправляем товар в ваш город'
  },
  {
    img: '/images/take_box.png',
    title: 'Получение товара',
    desc: 'По прибытию товара, с вами свяжется наш сотрудник, уточнит все детали, после чего вы забираете товар со склада в вашем городе, либо доставляем товар на ваш адрес'
  },
]

type Props = {}

export function WorkProgress({ }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stripes, setStripes] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const createStripe = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const left = Math.random() * (containerWidth - 100); // Позиция по X
      const delay = Math.random() * 3; // Задержка перед анимацией

      const newStripe = {
        id: Date.now(),
        left,
        delay,
      };

      setStripes((prev) => [...prev, newStripe]);

      // Удаляем полосу после анимации
      setTimeout(() => {
        setStripes((prev) => prev.filter((s) => s.id !== newStripe.id));
      }, 3000 + delay * 1000);
    };

    // Создаём новые полосы каждые 0.5-1.5 секунды
    const interval = setInterval(createStripe, 500 + Math.random() * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className={cn('mx-auto mt-12 max-w-[1440px] px-6 md:px-10 lg:mt-20 lg:px-8 1.5xl:mt-24 relative overflow-hidden')}
    >
      <>
        {stripes.map((stripe) => (
          <motion.div
            key={stripe.id}
            initial={{
              opacity: 0,
              y: -50,
              x: stripe.left,
              rotate: 45, // Наклон полосы
            }}
            animate={{
              opacity: [0, 1, 0], // Появление и исчезновение
              y: "100vh",         // Движение вниз
            }}
            transition={{
              duration: 2,
              delay: stripe.delay,
              ease: "linear",
            }}
            className="absolute w-3 h-3 rounded-full bg-yellow-400/80 blur-[1px]"
            style={{
              left: `${stripe.left}px`,
            }}
          />
        ))}
      </>

      <BoxReveal
        width='fit-content'
        duration={1.5}
        className={cn(
          'font-semibold text-fierly h-min',
          'text-xl leading-[25px]',
          'md:text-2xl md:leading-[30px]',
          'lg:max-w-[280px] lg:text-[28px] lg:leading-[35px]'
        )}
      >
        <h3 >Как это работает ?</h3>
      </BoxReveal>

      <div className='mt-16'>
        <div className='mt-10 pb-16 md:hidden'>
          <Small />
        </div>

        <div className='hidden md:block mt-8 pb-20'>
          <Medium />
        </div>

        <div className='absolute top-[300px] right-3 w-[150px] h-[150px]'>
          <div className='w-[250px] h-[250px] border-fierly border-2 opacity-45 absolute top-0 -rotate-3' />
          <div className='w-[180px] h-[180px] border-fierly border-2 opacity-70 absolute -top-[80px] -left-11 rotate-12' />
        </div>

        <div className='absolute bottom-[300px] left-3 w-[150px] h-[150px] scale-90 hidden md:block'>
          <div className='w-[250px] h-[250px] border-fierly border-2 opacity-45 absolute top-0 -rotate-3' />
          <div className='w-[180px] h-[180px] border-fierly border-2 opacity-70 absolute -top-[80px] -left-11 rotate-12' />
        </div>
      </div>
    </section>
  )
}

function Small() {

  return (
    <ul
      className='flex flex-col gap-12 relative'
    >
      {steps.map(step => {
        return (
          <li
            key={step.img}
            className='flex items-start gap-4 relative z-[4] select-none'
          >
            <div
              className='w-12 min-w-12 min-h-12 shadow-md shadow-fierly h-12 rounded-full bg-white flex items-center justify-center'
            >
              <img
                src={step.img}
                alt={step.title}
                draggable={false}
                className='w-8 h-8 min-w-8 min-h-8 max-h-8 max-w-8 bg-cover'
              />
            </div>

            <div className='flex flex-col  hover:scale-[1.02] transition-all'>
              <BoxReveal
                width='fit-content'
                boxColor='black'
                duration={0.9}
                delay={0.5}
                className={cn(
                  'font-semibold text-black h-min',
                  'text-xl leading-[25px]',
                  'md:text-2xl md:leading-[30px]',
                  'lg:max-w-[280px] lg:text-[28px] lg:leading-[35px]'
                )}
              >
                <h4 className='font-semibold text-base text-fierly'>
                  <span
                    className='animate-text-gradient [text-shadow:none] bg-gradient-to-r from-[#f0eae3] via-[#FFD700] to-[#f0eae3] bg-clip-text text-transparent'
                  >
                    {step.title}
                  </span>
                </h4>
              </BoxReveal>
              <p className='text-sm max-w-[80%]'>
                {step.desc}
              </p>
            </div>
          </li>
        )
      })}

      <div
        className='w-0.5 -ml-px bg-fierly absolute top-0 bottom-[13%] left-6 z-[2] animate-pulse'
      />
    </ul>
  )
}

function Medium() {

  return (
    <ul
      className='flex flex-col gap-16 relative'
    >
      {steps.map((step, idx) => {
        const isOdd = idx % 2 === 0;
        const isEven = !isOdd

        return (
          <li
            key={step.img}
            className={cn(
              'flex  gap-4 relative z-[4] select-none w-[calc(50%+32px)]',
              isOdd ? 'flex-row-reverse' : '',
              isEven ? 'ml-auto' : ''
            )}
          >
            <div
              className='w-16 min-w-16 min-h-16 h-16 rounded-full bg-white shadow-fierly shadow-md flex items-center justify-center'
            >
              <img
                src={step.img}
                alt={step.title}
                className='w-10 h-10 min-w-10 min-h-10 max-h-10 max-w-10 bg-cover'
              />
            </div>

            <div className='flex flex-col hover:scale-[1.04] transition-all'>
              <BoxReveal
                width='fit-content'
                boxColor='black'
                duration={0.9}
                className={cn(
                  'font-semibold text-black h-min',
                  isOdd ? 'ml-auto' : ''
                )}
              >
                <h4 className='font-semibold text-xl text-fierly whitespace-nowrap'>

                  <span
                    className='animate-text-gradient [text-shadow:none] bg-gradient-to-r from-[#f0eae3] via-[#FFD700] to-[#f0eae3] bg-clip-text text-transparent'
                  >
                    {step.title}
                  </span>
                </h4>
              </BoxReveal>
              <p className={cn(
                'text-lg lg:max-w-[90%]',
                isOdd ? 'ml-auto text-right' : ''
              )}>
                {step.desc}
              </p>
            </div>
          </li>
        )
      })}

      <div
        className='w-0.5 -ml-px bg-fierly absolute top-0 bottom-[15%] left-1/2 z-[2] animate-pulse'
      />
    </ul>
  )
}

