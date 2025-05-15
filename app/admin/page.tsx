'use client'

import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react'
import { Contacts } from './Contacts';


const correct_login = 'goodschina';
const correct_password = 'kz@admin!';
const last_auth_key = 'china_admin_last_auth'
const DAY_IN_MS = 24 * 60 * 60 * 1000; // 86400000

export default function Page() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const disableJoin = !login.length || !password.length;

  const authAdmin = () => {
    const isAdmin = login.toLocaleLowerCase().trim() === correct_login && password.toLocaleLowerCase().trim() === correct_password;
    if (!isAdmin) {
      setLogin('')
      setPassword('')
      return;
    }

    localStorage.setItem(last_auth_key, Date.now().toString())
    setIsAdmin(true)
  }

  const [isStorageCheck, setIsStorageCheck] = useState(true);
  useEffect(() => {
    const savedTimestamp = Number(localStorage.getItem(last_auth_key) || '');
    if (!savedTimestamp) {
      setIsStorageCheck(false)
      return;
    }

    const isDayPassed = Date.now() - savedTimestamp >= DAY_IN_MS;

    if (!isDayPassed) {
      setIsAdmin(true)
      setIsStorageCheck(false)
      return;
    }

    setIsStorageCheck(false)
    setIsAdmin(false)
    localStorage.removeItem(last_auth_key)
  }, [])


  // localStorage.setItem(last_auth_key, Date.now().toString())
  if (isStorageCheck) return null;

  return (
    <section className='flex min-h-[100vh] flex-col 1.5xl:max-w-screen-1.5xl 1.5xl:mx-auto'>
      {
        isAdmin
          ? <Contacts />
          : <div
            className='flex flex-col grow items-center justify-center'
          >
            <div
              className='flex flex-col gap-4 bg-maingray px-8 py-6 rounded-xl '
            >
              <div className='font-bold text-center mb-3 font-plex tracking-wide'>
                ADMIN PANEL
              </div>

              <input
                type="text"
                value={login}
                onChange={(evt) => setLogin(evt.target.value)}
                placeholder="Логин"
                className={cn(
                  'inp mx-4',
                )}
              />

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : "password"}
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  placeholder="Пароль"
                  className={cn(
                    'inp mx-4 !pr-12',
                  )}
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute top-1/2 -translate-y-1/2 p-2 right-5 hover:scale-90 transition-all'
                >
                  {showPassword && (
                    <div
                      className='w-1/2 h-0.5 bg-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -rotate-45'
                    />
                  )}

                  <svg
                    xmlSpace="preserve"
                    id="Capa_1"
                    width="20"
                    height="20"
                    fill="white"
                    version="1.1"
                    viewBox="0 0 442.04 442.04"
                  >
                    <path d="M221.02 341.304c-49.708 0-103.206-19.44-154.71-56.22-38.502-27.494-62.266-54.733-63.259-55.881a12.5 12.5 0 0 1 0-16.367c.993-1.146 24.756-28.387 63.259-55.881 51.505-36.777 105.003-56.219 154.71-56.219s103.207 19.441 154.71 56.219c38.502 27.494 62.266 54.734 63.259 55.881a12.5 12.5 0 0 1 0 16.367c-.993 1.146-24.756 28.387-63.259 55.881-51.503 36.779-105.001 56.22-154.71 56.22M29.638 221.021c9.61 9.799 27.747 27.03 51.694 44.071 32.83 23.361 83.714 51.212 139.688 51.212s106.859-27.851 139.688-51.212c23.944-17.038 42.082-34.271 51.694-44.071-9.609-9.799-27.747-27.03-51.694-44.071-32.829-23.362-83.714-51.212-139.688-51.212s-106.858 27.85-139.688 51.212c-23.944 17.038-42.082 34.269-51.694 44.071"></path>
                    <path d="M221.02 298.521c-42.734 0-77.5-34.767-77.5-77.5s34.766-77.5 77.5-77.5a77.44 77.44 0 0 1 51.048 19.188c5.193 4.549 5.715 12.446 1.166 17.639s-12.447 5.714-17.639 1.166a52.45 52.45 0 0 0-34.576-12.993c-28.949 0-52.5 23.552-52.5 52.5s23.551 52.5 52.5 52.5 52.5-23.552 52.5-52.5c0-6.903 5.597-12.5 12.5-12.5s12.5 5.597 12.5 12.5c.002 42.733-34.765 77.5-77.499 77.5"></path>
                    <path d="M221.02 246.021c-13.785 0-25-11.215-25-25s11.215-25 25-25 25 11.215 25 25-11.214 25-25 25"></path>
                  </svg>
                </button>
              </div>

              <button
                onClick={authAdmin}
                disabled={disableJoin}
                className='btn'
              >
                Войти
              </button>
            </div>
          </div>
      }
    </section>
  )
}
