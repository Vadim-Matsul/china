'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-maingray p-4">
      <Head>
        <title>Страница не найдена | Ваш сайт</title>
      </Head>

      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white/90 mb-6">Страница не найдена</h2>
        <p className="text-white mb-8">
          Запрошенная страница не существует. Вы будете автоматически перенаправлены
          на главную страницу через 5 секунд.
        </p>
        <button
          onClick={() => router.push('/')}
          className='btn'
        // className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  );
}