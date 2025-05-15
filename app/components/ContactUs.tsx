import { cn } from '@/utils/cn'
import { ChangeEvent, useState } from 'react';
import { anchors } from '../configs/anchors';
import { motion } from 'framer-motion'
import { writeContactToDB } from '../db/utils/writeContact';

type Props = {}

export function ContactUs({ }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValid] = useState(false);

  // Форматирование номера при вводе
  const formatPhone = (value: string): string => {
    let cleaned = value.replace(/\D/g, '');

    // Ограничение длины для RU/KZ номеров
    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);

    let formatted = '';
    if (cleaned.startsWith('77')) { // Казахстан (+77)
      formatted = '+7 7' + cleaned.slice(2, 3);
      if (cleaned.length > 3) formatted += ' ' + cleaned.slice(3, 6);
      if (cleaned.length > 6) formatted += ' ' + cleaned.slice(6, 8);
      if (cleaned.length > 8) formatted += ' ' + cleaned.slice(8, 10);
    } else { // Россия (+7)
      formatted = '+7 ' + cleaned.slice(1, 4);
      if (cleaned.length > 4) formatted += ' ' + cleaned.slice(4, 7);
      if (cleaned.length > 7) formatted += ' ' + cleaned.slice(7, 9);
      if (cleaned.length > 9) formatted += ' ' + cleaned.slice(9, 11);
    }

    return formatted.trim();
  };

  // Валидация номера
  const validatePhone = (value: string): boolean => {
    const cleaned = value.replace(/\D/g, '');
    // Проверка на RU (+7) или KZ (+7 или +77) номер
    return cleaned.length === 11 && (
      cleaned.startsWith('7') || // RU: +7 (XXX) XXX-XX-XX
      cleaned.startsWith('77')   // KZ: +7 7XX XXX-XX-XX
    );
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhone(value);
    setPhone(formatted);
    setIsValid(validatePhone(formatted) || value === '');
  };

  const onNameChange = (nextName: string) => {
    let valid_name = nextName;
    valid_name = valid_name.replaceAll(/[^A-Za-zА-Яа-яЁё\s\-']/gu, '').trim();
    setName(valid_name)
  }

  const isDisabledBtn = !name.length || !isValidPhone;
  const [isLoading, setIsLoading] = useState(false)
  const [isSend, setIsSend] = useState(false)
  const onSubmit = async () => {
    if (isDisabledBtn || isLoading) return;
    setIsLoading(true)

    try {


      await writeContactToDB({
        name: name,
        number: phone.match(/\d/gi)!.join(''),
      });

      setIsSend(!isSend)
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id={anchors.feedback.href}
      className={cn(
        'cont basepaddings',
        'flex flex-col grow text-foreground relative pb-20',
      )}
    >
      <div className={cn(
        'relative z-[3] flex flex-col justify-between gap-4',
        'rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl max-w-[500px] mx-auto',
      )}>
        <div
          className='w-[500px] h-3 border-2 border-fierly z-[2] rounded-full -rotate-45 absolute top-[100px] -left-[50px]'
        />

        <div
          className='w-[300px] h-3 border-2 border-fierly z-[2] rounded-full -rotate-45 absolute bottom-[140px] -right-[40px]'
        />

        <div className='grow flex flex-col mt-4 gap-4 relative z-[5]'>
          <h2 className={cn(
            'basepaddings relative z-[5] flex gap-2 items-center tracking-tight justify-center masked-text font-extrabold',
            'text-[44px] leading-none font-extrabold flex flex-wrap gap-2'
          )}>
            <span>Свяжитесь</span>
            <span>с нами</span>
          </h2>

          {!isSend && (
            <motion.input
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              value={name}
              onChange={(evt) => onNameChange(evt.target.value)}
              placeholder='Имя'
              className={cn(
                'inp mx-4',
                { 'animate-pulse': isLoading }
              )}
            />
          )}

          {!isSend && (
            <motion.input
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type="tel"
              value={phone}
              onChange={handleChangePhone}
              placeholder="+7 ___ ___ __ __"
              // className={`border ${isValid ? 'border-gray-300' : 'border-red-500'}`}
              className={cn(
                'inp mx-4',
                { 'animate-pulse': isLoading }
              )}
            />
          )}
        </div>

        {!isSend && (
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='mx-3 mb-2 relative z-[5]'
          >
            <button
              onClick={onSubmit}
              disabled={isDisabledBtn}
              className={cn(
                'btn',
                'w-full'
              )}
            >
              Оставить заявку
            </button>
          </motion.div>
        )}

        {isSend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='mx-auto w-min backdrop-blur-lg rounded-full mt-4 relative z-[4]'
          >
            <svg
              xmlSpace="preserve"
              id="Capa_1"
              width="120"
              height="120"
              fill="lightgreen"
              version="1.1"
              viewBox="0 0 305.002 305.002"
            >
              <path d="M152.502.001C68.412.001 0 68.412 0 152.501s68.412 152.5 152.502 152.5c84.089 0 152.5-68.411 152.5-152.5S236.591.001 152.502.001m0 280C82.197 280.001 25 222.806 25 152.501c0-70.304 57.197-127.5 127.502-127.5s127.5 57.196 127.5 127.5c0 70.305-57.196 127.5-127.5 127.5"></path>
              <path d="m218.473 93.97-90.546 90.547-41.398-41.398c-4.882-4.881-12.796-4.881-17.678 0-4.881 4.882-4.881 12.796 0 17.678l50.237 50.237a12.47 12.47 0 0 0 8.839 3.661c3.199 0 6.398-1.221 8.839-3.661l99.385-99.385c4.881-4.882 4.881-12.796 0-17.678s-12.797-4.882-17.678-.001"></path>
            </svg>
          </motion.div>
        )}
      </div>
    </section>
  )
}
