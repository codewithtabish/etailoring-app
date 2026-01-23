import ClientFull from '@/components/general/clinets_full';
import { FeatureSection } from '@/components/general/feature-section';
import { Header } from '@/components/general/header/navbar';
import Faq1 from '@/components/mvpblocks/faq-1';
import SimplePricing from '@/components/mvpblocks/simple-pricing';
import { HeroSection2 } from '@/components/ui/hero-section-2'
import { ImageItem, PhoneCarousel } from '@/components/ui/phone-carousel'
import React from 'react'

const HomePage = () => {
  const exampleImages: ImageItem[] = [
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Behance-screen.png",
    alt: "Behance app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774805/Notion-screen.png",
    alt: "Notion app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774806/One-screen.png",
    alt: "One app on iPhone",
  },
  {
    src: "https://res.cloudinary.com/harshitproject/image/upload/v1746774807/Reddit-nj7hwh.png",
    alt: "Reddit app on iPhone",
  },
];
  return (
    <div>
      <Header />
			{/* <DemoLayout /> */}
    <HeroSection2/>
    <FeatureSection/>
    {/* <HowItWorksPro/> */}
    <ClientFull/>
    {/* <HowItWorksSection/> */}
    <Faq1/>
    <SimplePricing/>
    {/* <FooterGlow/> */}
    {/* <TestimonialsColumn testimonials={etailoringTestimonials}/> */}
    {/* <TestimonialsColumn testimonials={etailoringTestimonials}/> */}
    {/* <PhoneCarousel images={exampleImages}/> */}
    </div>
  )
}

export default HomePage
