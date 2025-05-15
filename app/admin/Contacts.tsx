import { useEffect, useState } from 'react'
import { getAllContacts } from '../db/utils/getAllContacts';
import { cn } from '@/utils/cn';
import { deleteContact } from '../db/utils/deleteContact';

export function Contacts() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [contacts, setContacts] = useState<{ id: string; name: string, number: string }[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const contacts = await getAllContacts()
        setContacts(contacts);
      } catch (e) {
        console.error(e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    })();
  }, [])

  const [shouldRemoveID, setShouldRemoveID] = useState('')
  const [removingID, setRemovingID] = useState('')

  if (isLoading) return (
    <section className='px-10 py-6 flex items-center justify-center grow font-bold'>
      <p>Загрузка...</p>
    </section>
  );

  if (isError) return (
    <section className='px-10 py-6 flex items-center justify-center grow font-bold'>
      <p>Ошибка, перезагрузите страницу</p>
    </section>
  );

  if (!contacts.length) return (
    <section className='px-10 py-6 flex items-center justify-center grow font-bold'>
      <p>Нет активных заявок</p>
    </section>
  );

  async function removeContact(id: string) {
    console.log(id)
    setRemovingID(id);

    try {
      const isRemoved = await deleteContact(id);

      if (isRemoved) {
        setShouldRemoveID('')
        setRemovingID('')
        setContacts(prev => prev.filter(c => c.id !== id));
      } else {
        setRemovingID('')
      }
    } catch (e: any) {
      setRemovingID('')
      console.error('Ошибка удаления контакта ' + id + ' ' + e)
    }
  }

  return (
    <ul className='py-6 flex flex-col'>
      {contacts.map((contact, index, arr) => {
        const isShouldRemove = shouldRemoveID === contact.id;
        const isRemoving = removingID === contact.id;

        return (
          <div key={contact.id} className={cn(
            'flex items-center gap-3 px-10 transition-all',
            isShouldRemove ? 'bg-red-500/20' : '',
            isRemoving ? 'animate-pulse' : ''
          )}>
            <p className='text-xl'>{index + 1}</p>
            <li
              className={cn(
                'flex justify-between font-plex py-4 grow',
                arr.length - 1 === index ? '' : 'border-b-[1px] border-b-white/60'
              )}
            >
              <div className='flex flex-col'>
                <p className=''>
                  <span className='font-bold'>Имя:</span> {contact.name}
                </p>
                <p>
                  <span className='font-bold'>Телефон: </span>
                  {formatPhone(contact.number)}
                </p>
              </div>

              <button
                onClick={() => {
                  if (isRemoving) return;

                  setShouldRemoveID(contact.id);

                  if (isShouldRemove) {
                    removeContact(contact.id)
                  }
                }}
                onBlur={() => {
                  if (isRemoving) return;
                  setShouldRemoveID('')
                }}
                className='border-red-500 transition-all hover:border-red-700 hover:scale-95 rounded-lg border-2 w-min p-1 px-2'
              >
                {
                  isShouldRemove
                    ? <svg
                      xmlSpace="preserve"
                      id="Capa_1"
                      width="20"
                      height="20"
                      fill="lightgreen"
                      version="1.1"
                      viewBox="0 0 305.002 305.002"
                    >
                      <path d="M152.502.001C68.412.001 0 68.412 0 152.501s68.412 152.5 152.502 152.5c84.089 0 152.5-68.411 152.5-152.5S236.591.001 152.502.001m0 280C82.197 280.001 25 222.806 25 152.501c0-70.304 57.197-127.5 127.502-127.5s127.5 57.196 127.5 127.5c0 70.305-57.196 127.5-127.5 127.5"></path>
                      <path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.47 12.47 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678s-12.797-4.882-17.678-.001"></path>
                    </svg>
                    : <svg
                      xmlSpace="preserve"
                      id="Capa_1"
                      width="20"
                      height="20"
                      fill="red"
                      version="1.1"
                      viewBox="0 0 485 485"
                    >
                      <path d="M67.224 0h350.535v71.81H67.224zM417.776 92.829H67.237V485h350.537V92.829zM165.402 431.447H137.04V146.383h28.362zm91.287 0h-28.363V146.383h28.363zm91.281 0h-28.361V146.383h28.361z"></path>
                    </svg>
                }

              </button>
            </li>
          </div>
        )
      })}
    </ul>
  )
}

function formatPhone(phone: string) {
  // Удаляем всё, кроме цифр
  const cleaned = phone.toString().replace(/\D+/g, '');

  // Проверяем длину и начало номера
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    // Формат: +7 111 111-11-11
    return `+7 ${cleaned.substring(1, 4)} ${cleaned.substring(4, 7)}-${cleaned.substring(7, 9)}-${cleaned.substring(9)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith('8')) {
    // Конвертируем 8 в +7
    return `+7 ${cleaned.substring(1, 4)} ${cleaned.substring(4, 7)}-${cleaned.substring(7, 9)}-${cleaned.substring(9)}`;
  }

  // Если номер не подходит под форматы, возвращаем оригинал
  return phone;
}
