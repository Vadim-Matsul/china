import { BoxReveal } from '@/components/ui/BoxReveal'
import { cn } from '@/utils/cn'
// import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import { useState } from 'react'

const cards = [
  {
    id: 0,
    bg: '/images/logistic_plane.jpg',
    title: 'Авиаперевозка',
    desc: 'Авиаперевозка идеально подходит для тех, кому необходимо срочно доставить груз, а также для ценных грузов и образцов. Сроки доставки составляют от 3 до 7 дней.'
  },
  {
    id: 1,
    bg: '/images/logistic_track.jpg',
    title: 'Автоперевозка',
    desc: 'Преимущества автоперевозок заключаются в более коротких сроках доставки, составляющих от 10 до 28 дней, по сравнению с железнодорожными перевозками. Также автоперевозки имеют более низкую стоимость по сравнению с авиаперевозками.'
  },
  {
    id: 2,
    bg: '/images/logistic_train.jpg',
    title: 'ЖД перевозка',
    desc: 'Железнодорожные перевозки подходят для тех, кому важна стоимость доставки, а не сроки. Этот вид транспорта обеспечивает экономичную доставку товаров с более длительным временем в пути, которое составляет от 30 до 40 дней.'
  }
]

export function Logistic({ }) {
  const [activeCard, setActiveCard] = useState<null | number>(null)

  const selectedCard = cards.find(c => c.id === activeCard)

  return (
    <section>
      <section
        className={cn(
          'mx-auto pt-12 pb-16 max-w-[1440px] px-6 md:px-10 lg:mt-20 lg:px-8 1.5xl:mt-24 relative',
          'flex flex-col gap-8'
        )}
      >
        <div
          className='absolute -top-px left-0 right-0 bg-white h-px'
        >
          <div
            className='w-[20vw] h-4 bg-white absolute top-0 right-6 md:right-10 lg:right-8 rounded-b-xl'
          />
        </div>

        <BoxReveal
          width='fit-content'
          className={cn(
            'whitespace-nowrap font-semibold text-fierly h-min',
            'text-xl leading-[25px]',
            'md:text-3xl md:leading-[30px]',
            'lg:text-[28px] lg:leading-[35px]'
          )}
        >
          <h2>Логистика</h2>
        </BoxReveal>

        <section
          className='flex flex-col gap-5 lg:gap-3 lg:flex-row'
        >
          {cards.map(card => {
            return (
              <div
                key={card.id}
                onClick={() => setActiveCard(card.id)}
                className={cn(
                  // 'w-52 h-52 bg-red-500'
                  'w-full h-[150px] lg:h-[250px] rounded-2xl overflow-hidden cursor-pointer flex relative',
                  'shadow-md shadow-slate-500 hover:shadow-fierly-foreground transition-all hover:scale-95'
                )}
                style={{
                  backgroundImage: `url(${card.bg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className='w-full h-full flex items-center justify-center'>
                  <p
                    className={cn(
                      'font-bold text-[40px] leading-none [text-shadow:_0_8px_8px_black] text-white'
                    )}
                  >
                    {card.title}
                  </p>
                </div>
              </div>
            )
          })}
        </section>
      </section>

      <Modal
        isOpen={Boolean(selectedCard)}
        onOpenChange={() => {
          setActiveCard(null)
        }}
        backdrop='blur'
        placement='center'
        size='5xl'
        classNames={{
          backdrop: 'backdrop-blur-md',
          base: 'px-1 py-3 sm:px-3 sm:py-5 w-[96vw] sm:max-w-[80vw] max-h-[80vh] rounded-lg overflow-hidden',
          closeButton: 'hidden'
        }}
      >
        <ModalContent
          className='relative'
        >
          {(onClose) => (
            <>
              <div className='absolute inset-0 z-0'>
                <div className='absolute inset-0 z-[1]'>
                  <img
                    src={selectedCard?.bg}
                    className='w-full h-full bg-cover'
                  />
                </div>

                <div className='absolute inset-0 z-[2] backdrop-blur-[40px]' />
              </div>

              <ModalHeader className="flex flex-col gap-1 relative z-10">
                <Button
                  onClick={onClose}
                  className='absolute -top-2 right-0 w-5 h-5'
                >
                  <div
                    className='w-full h-0.5 absolute rotate-45 bg-white'
                  />
                  <div
                    className='w-full h-0.5 absolute -rotate-45 bg-white'
                  />
                </Button>

                <p
                  className={cn(
                    'text-xl sm:text-3xl font-[900]',
                    'animate-text-gradient [text-shadow:none] bg-gradient-to-r from-[#f0eae3] via-[#FFD700] to-[#f0eae3] bg-clip-text text-transparent'
                  )}
                >
                  {selectedCard?.title}
                </p>
              </ModalHeader>

              <ModalBody
                className='relative z-10 text-[18px] leading-[19px] sm:text-xl sm:leading-[24px] font-bold'
              >
                <p className='[text-shadow:_0_4px_4px_black]'>
                  {selectedCard?.desc}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  )
}

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

// function Test() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen}>Open Modal</Button>
//       <Modal
//         isDismissable={false}
//         isKeyboardDismissDisabled={true}
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
//               <ModalBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
//                   risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
//                   quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
//                   risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
//                   quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
//                   adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
//                   officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
//                   nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
//                   deserunt nostrud ad veniam.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

