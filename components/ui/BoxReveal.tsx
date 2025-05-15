// 'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface BoxRevealProps {
  children: JSX.Element
  width?: 'fit-content' | '100%'
  boxColor?: string
  /** В секундах */
  duration?: number
  delay?: number
  className?: string
}

export function BoxReveal({
  children,
  width = 'fit-content',
  boxColor,
  duration,
  className,
  delay = 0.25,
}: BoxRevealProps) {
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible')
      mainControls.start('visible')
    } else {
      slideControls.start('hidden')
      mainControls.start('hidden')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow: 'hidden' }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor ? boxColor : '#FFD700',
        }}
      />
    </div>
  )
}

