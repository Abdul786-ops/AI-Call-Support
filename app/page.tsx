import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero3 from '~/components/widgets/Hero3';
import Hero4 from '~/components/widgets/Hero4';
import Hero5 from '~/components/widgets/Hero5';
import Hero2 from '~/components/widgets/Hero2';
import Hero1 from '~/components/widgets/Hero';
import Hero6 from '~/components/widgets/Hero6';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import CallToAction from '~/components/widgets/CallToAction';
import Stats from '~/components/widgets/Stats';
import Content from '~/components/widgets/Content';
import RealUseCases from '~/components/widgets/RealUseCases';
import VideoSection from '~/components/widgets/VideoSection';
import Team from '~/components/widgets/Team';
import TeamSection from '~/components/widgets/TeamSection';



import {
  callToAction3Home,
  faqs2Home,
  heroHome,
  heroHomeTwo,
  socialProofHome,
  testimonialsHome,
  featuresHomeTwo,
  featuresHomeThree,
  integrationHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  teamHome
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero3 {...heroHome} />
      <SocialProof {...socialProofHome} />
      <RealUseCases />
      {/* <Stats {...statsAbout} /> */}
      {/* <Hero6 {...heroHomeTwo} /> */}
      <Features {...featuresHomeTwo} />
      {/* <Features {...featuresHomeThree} /> */}
      {/* <VideoSection height={100} /> */}
      <TeamSection/>
      <Content {...contentHomeOne} />
      <Content {...contentHomeThree} /> 
      <Testimonials {...testimonialsHome} />
      {/* <Hero1 {...integrationHome} /> */}
      <FAQs2 {...faqs2Home} />
      {/* <Team {...teamHome} />  */}
      <CallToAction {...callToAction3Home} />
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Hero5 {...heroHomeThree} /> */}
      {/* <Hero4 {...heroHomeFour} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Features2 {...features2Services} /> */}
      {/* <Pricing {...pricingHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
      {/* <Contact {...contactHome} /> */}
    </>
  );
}
