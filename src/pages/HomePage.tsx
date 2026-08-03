import { Hero } from '@/components/home/Hero'
import { Intro } from '@/components/home/Intro'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Process } from '@/components/home/Process'
import { Stats } from '@/components/home/Stats'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { FinalCTA } from '@/components/home/FinalCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedServices />
      <FeaturedProjects />
      <Process />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
