import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { About } from './About'
import { Benefits } from './Benefits'
import { InteractionScheme } from './InteractionScheme'
import { MountainGraphIMG } from './MountainGraphIMG'
import { Resale } from './Resale'
import { ResolveTasks } from './ResolveTasks'
import { Slogan } from './Slogan'

import { motion } from 'framer-motion';

type Props = {}

export function HomePage({ }: Props) {
  return (
    <>
      <Header />

      <section className='flex min-h-[100svh] flex-col'>
        <div className='pt-[var(--header-mobile-height)] md:pt-[var(--header-desktop-height)]'>
          <Section>
            <Slogan />
          </Section>
          <Section>
            <About />
          </Section>
          <Section>
            <Benefits />
          </Section>
          <Section>
            <MountainGraphIMG />
          </Section>
          <Section>
            <InteractionScheme />
          </Section>
          <Section>
            <ResolveTasks />
          </Section>
          <Section>
            <Resale />
          </Section>
        </div>

        <div className='mt-16 md:mt-14 lg:mt-24'>
          <Footer />
        </div>
      </section>
    </>
  )
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
