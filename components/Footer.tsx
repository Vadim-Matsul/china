import { CallPhoneIcon } from '@/app/components/icons/CallPhoneIcon'
import { InstagramIcon } from '@/app/components/icons/InstagramIcon'
import { contacts } from '@/app/configs/contacts'
import { cn } from '@/utils/cn'


type Props = {

}
const year = new Date().getFullYear()
export function Footer({ }: Props) {

  return (
    <section
      // 
      className={cn(
        'bg-maingray py-5 rounded-t-3xl overflow-hidden shadow-md shadow-white',
      )}
    >
      <div className='1.5xl:max-w-screen-1.5xl 1.5xl:mx-auto px-6 md:px-10 lg:px-8'>

        <div
          className='flex items-center justify-center gap-3'
        >
          <img
            width={48}
            height={48}
            src='/images/logo_picture.png'
          />
          <div >
            <p className='font-bold font-plex tracking-tight'>GOODS from CHINA</p>
            <p className='font-bold text-sm'>&copy;&nbsp;{year}</p>
          </div>
        </div>

        <div className='flex items-center justify-center mt-5 gap-3'>
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
      </div>
    </section>
  )
}