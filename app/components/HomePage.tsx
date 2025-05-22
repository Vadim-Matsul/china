import { Header } from '@/components/header'
import { Intro } from './Intro'
import { HowItWorks } from './HowItWorks'
import { CanBring } from './CanBring'
import { ContactUs } from './ContactUs'
import { AboutUs } from './AboutUs'
import { InstagramIcon } from './icons/InstagramIcon'
import { CallPhoneIcon } from './icons/CallPhoneIcon'
import { contacts } from '../configs/contacts'
import { Footer } from '@/components/Footer'

type Props = {}

export function HomePage({ }: Props) {
  return (
    <>
      <Header />

      <section className='flex min-h-[100vh] flex-col'>
        <div className='pt-[var(--header-mobile-height)] md:pt-[var(--header-desktop-height)] grow flex flex-col'>
          <Intro />
          <AboutUs />
          <HowItWorks />
          <div className='relative max-w-[1440px] 1.5xl:mx-auto overflow-hidden'>
            <div className='absolute inset-0 z-[2]'>
              <div className='absolute inset-0 z-[4] backdrop-blur-[50px]' />
              <div
                className='bg-fierly w-[200px] h-[100px] rounded-full absolute top-[100px] left-[200px] opacity-60 animate-fireball'
              />
              <div
                className='bg-fierly w-[100px] h-[50px] rounded-full absolute top-1/2 left-1/2 opacity-70 animate-fireball'
              />
              <div
                className='bg-fierly w-[100px] h-[100px] rounded-full absolute bottom-20 right-1/3 opacity-50 animate-fireball'
              />
            </div>

            <div className='relative z-[4]'>
              <CanBring />
              <ContactUs />
            </div>
          </div>
        </div>

        <Footer />
      </section>

      <div
        className='fixed bottom-3 p-1 right-3 z-[100] flex items-center justify-center gap-2'
      >
        <a
          href={contacts.instagram.link}
          target='_blank'
          className='transition-all hover:scale-90'
        >
          <InstagramIcon className='w-10 h-10' />
        </a>
        <a
          href={`tel:+${contacts.phone.number}`}
          className='transition-all hover:scale-90'
        >
          <CallPhoneIcon className='w-7 h-7' />
        </a>
      </div>
    </>
  )
}
