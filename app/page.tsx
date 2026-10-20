import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TaglineBand } from '@/components/tagline-band'
import { ServicesIntro } from '@/components/services-intro'
import { WhyUs } from '@/components/why-us'
import { PracticeAreas } from '@/components/practice-areas'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TaglineBand />
        <ServicesIntro />
        <WhyUs />
        <PracticeAreas />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
