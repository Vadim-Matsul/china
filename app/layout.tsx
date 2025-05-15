import type { Metadata } from 'next'

import './style/global.css'

export const metadata: Metadata = {
  title: 'GOODS FROM CHINA',
  description: '',
  icons: {
    icon: "/images/logo_picture.png",
  },
}

type Props = {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className={`font-suisse antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
