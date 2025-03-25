import { useDisclosure } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'
import { Drawer } from 'vaul'

import { NAVIGATION_CONFIG } from '@/constants/paths'
import tailwindConfig from '@/tailwind.config'

const MD_SCREEN_WIDTH = parseInt(tailwindConfig.theme.screens.md)
const isMaxWidth = () => window.innerWidth >= MD_SCREEN_WIDTH

type Props = {}

export function BurgerMenu({ }: Props) {
  const isOpenDisclosure = useDisclosure()

  React.useLayoutEffect(() => {
    /**
     * Эффект следит за закрытием Drawer
     * при экране > md
     */

    const recalculate = () => {
      isMaxWidth() && isOpenDisclosure.onClose()
    }

    const resizeObserver = new ResizeObserver(recalculate)
    resizeObserver.observe(document.body)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <Drawer.Root
      direction='right'
      open={isOpenDisclosure.isOpen}
      onClose={isOpenDisclosure.onClose}
    >
      <Drawer.Trigger
        className={`menu ${isOpenDisclosure.isOpen ? 'opened' : ''}`}
        onClick={isOpenDisclosure.onOpenChange}
        aria-expanded={isOpenDisclosure.isOpen}
        aria-label='Main Menu'
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
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay
          onClick={isOpenDisclosure.onClose}
          className='fixed inset-0 cursor-pointer bg-transparent'
        />
        <Drawer.Title />

        <Drawer.Content className='fixed bottom-0 right-0 top-[var(--header-mobile-height)] w-[min(100vw,360px)] bg-[#eaeaec] text-foreground shadow-lg shadow-foreground md:top-[var(--header-desktop-height)]'>
          <div className='h-full w-full bg-[#eaeaec] px-6 text-foreground xs:px-10'>
            <Navigation />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

const Navigation = () => {
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
      className='flex flex-col items-end space-y-4'
      initial='hidden'
      animate='visible'
      variants={listVariants}
    >
      {NAVIGATION_CONFIG.map((item, index) => (
        <motion.li
          key={index}
          className='mr-1 w-min cursor-pointer text-right transition-all hover:text-fierly'
          variants={itemVariants}
        >
          <a
            href={item.url}
            className='whitespace-nowrap font-plex text-lg font-medium uppercase leading-normal tracking-wide'
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}
