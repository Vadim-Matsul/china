export const PATHS = {
  HOME: {
    url: '/',
    is: (path: string) => path === PATHS.HOME.url,
    make: () => {},
  },
  ABOUT: {
    url: '/about-as',
    is: (path: string) => path === PATHS.ABOUT.url,
    make: () => {},
  },
  CONTACTS: {
    url: '/contacts',
    is: (path: string) => path === PATHS.CONTACTS.url,
    make: () => {},
  },
  LOGIN: {
    url: '/login',
    is: (path: string) => path === PATHS.LOGIN.url,
    make: () => {},
  },
} as const

export const NAVIGATION_CONFIG = [
  {
    label: 'about us',
    url: PATHS.ABOUT.url,
  },
  {
    label: 'contacts',
    url: PATHS.CONTACTS.url,
  },
  {
    label: 'login',
    url: PATHS.LOGIN.url,
  },
] as const
