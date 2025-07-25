// 'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Drawer } from 'vaul'

import { cn } from '@/utils/cn'
import { useINDXState } from '@/utils/hooks/useINDXState'
import { NAVIGATION_CONFIG } from '@/constants/paths'
import tailwindConfig from '@/tailwind.config'
import { anchors } from '@/app/configs/anchors'
import { scrollToBlockByID } from '@/app/utils'

const MD_SCREEN_WIDTH = parseInt(tailwindConfig.theme.screens.md)
const isMaxWidth = () => window.innerWidth >= MD_SCREEN_WIDTH
const headerMobileHeight = 60
const headerDesktopHeight = 80

type Props = {}

export function Header({ }: Props) {
  const isMenuOpenState = useINDXState(false)
  const shouldHideState = useINDXState(false)

  React.useEffect(() => {
    /**
     * Эффект следит за открытием/закрытием хедера
     */

    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const scrollThreshold = isMaxWidth() ? headerDesktopHeight : headerMobileHeight

      const currentScrollY = window.scrollY
      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        shouldHideState.setState(true)
      } else {
        shouldHideState.setState(false)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  React.useLayoutEffect(() => {
    /**
     * Эффект следит за закрытием Drawer
     * при экране > md
     */

    const recalculate = () => {
      isMaxWidth() && isMenuOpenState.setState(false)
    }

    const resizeObserver = new ResizeObserver(recalculate)
    resizeObserver.observe(document.body)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])



  return (
    <header
      className={cn(
        'fixed left-0 right-0 backdrop-blur-2xl z-[10000]  text-foreground transition-all duration-700',
        'h-[var(--header-mobile-height)] md:h-[var(--header-desktop-height)]',
        shouldHideState.state ? '-translate-y-full' : '',
      )}
    >
      <div className='mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-8'>
        <div className='flex items-center gap-2'>
          <img
            src='/images/logo_picture.png'
            className='w-10 h-10 min-w-10 min-h-10 border-2 border-mainred rounded-full'
          />

          <div className='font-bold font-plex tracking-tight'>
            <p>GOODS from CHINA</p>
          </div>
        </div>

        <div>
          <div key='navigation | mobile' className='md:hidden'>
            <button
              onClick={() => {
                isMenuOpenState.setState((p) => !p)
              }}
              className={cn('menu', isMenuOpenState.state ? 'opened ' : '')}
            >
              <svg width='32' height='32' viewBox='0 0 100 100'>
                <path
                  className='line line1'
                  d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                />
                <path className='line line2' d='M 20,50 H 80' />
                <path
                  className='line line3'
                  d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                />
              </svg>
            </button>

            <Drawer.Root
              direction='right'
              open={isMenuOpenState.state}
              onClose={() => isMenuOpenState.setState(false)}
            >
              <Drawer.Portal>
                <Drawer.Overlay
                  onClick={() => isMenuOpenState.setState(false)}
                  className='fixed inset-0 z-[10000] cursor-pointer bg-transparent'
                >
                  <div className='absolute inset-0 top-[calc(var(--header-mobile-height)+1px)] bg-black/50 md:top-[var(--header-desktop-height)]' />
                </Drawer.Overlay>

                <Drawer.Title />

                <Drawer.Content className='fixed bottom-0 right-0 top-[var(--header-mobile-height)] z-[10000] w-[min(100vw,375px)] bg-maingray text-foreground shadow-foreground md:top-[var(--header-desktop-height)]'>
                  <div className='h-full w-full bg-maingray px-6 text-foreground'>
                    <MobileNavigation
                      close={() => isMenuOpenState.setState(false)}
                    />
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>

          <div key='navigation | desktop' className='hidden md:flex'>
            <ul className='flex items-center gap-6 md+:gap-10 lg:gap-12'>
              {Object.entries(anchors).map(([, { title, href }], index) => {

                return (
                  <li
                    key={index}
                    className='w-min cursor-pointer transition-all hover:text-fierly'
                  >
                    <button
                      onClick={(evt) => {
                        evt.preventDefault();
                        scrollToBlockByID({ id: href })
                      }}
                      className='whitespace-nowrap font-plex font-bold text-sm uppercase leading-normal tracking-wide'
                    >
                      {title}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileNavigation = ({ close }: { close: () => void }) => {
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.ul
      className='mr-1 flex flex-col items-end space-y-4 mt-6 font-bold'
      initial='hidden'
      animate='visible'
      variants={listVariants}
    >
      {Object.entries(anchors).map(([, { title, href }], index) => (
        <motion.li
          key={index}
          className='w-min cursor-pointer text-right transition-all hover:text-fierly'
          variants={itemVariants}
        >
          <button
            onClick={evt => {
              evt.preventDefault()
              close()
              scrollToBlockByID({ id: href })
            }}
            className='whitespace-nowrap font-plex text-lg font-medium uppercase leading-normal tracking-wide'
          >
            {title}
          </button>
        </motion.li>
      ))}
    </motion.ul>
  )
}
