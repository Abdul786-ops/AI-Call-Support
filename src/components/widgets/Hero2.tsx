import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import { IconUserPlus, IconCheck, IconLanguage, IconClock, IconCalendarOff } from '@tabler/icons-react';
import CTA from '../common/CTA';
// import chatSiteChat from 'public/chatsite-chat.svg'


const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image, validationImages }: HeroProps) => {
  return (
    <section className="mt-[-72px] bg-custom-white" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[60%] items-center">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-600">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-4 text-xl font-normal text-gray-800">{subtitle}</p>}
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2">
                    <IconUserPlus className="text-primary-600 h-6 w-6" />
                    <span>Always picks up the phone immediately</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCheck className="text-primary-600 h-6 w-6" />
                    <span>Uninterrupted 24/7 availability </span>
                  </div>
                  <div className="w-full"></div>
                  <div className="flex items-center gap-2">
                    <IconLanguage className="text-primary-600 h-6 w-6" />
                    <span> Handles 1000s of calls simultaneouslys </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconClock className="text-primary-600 h-6 w-6" />
                    <span>Answers all customer questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconCalendarOff className="text-primary-600 h-6 w-6" />
                    <span>Real-time order status updates </span>
                  </div>
                </div>
                <br></br>
                <br></br>

                <div className="mt-6 flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
                </div>

                <br></br>
                <br></br>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {validationImages &&
                    validationImages.map(({ src, alt, link }, index) => (
                      <a key={`item-social-proof-${index}`} href={link} target="_blank" rel="noopener" className="transition-opacity duration-300 hover:opacity-100 shadow-lg opacity-80 border-2 rounded-lg text-primary-600 flex-shrink-0">
                        <Image
                          src={src}
                          alt={alt}
                          className="h-auto w-20 sm:w-24 md:w-28 lg:w-32"
                          objectFit="contain"
                          width={90}
                          height={90}
                        />
                      </a>
                    ))}
                </div>

              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto h-full w-full max-w-4xl">
              {image && (
                <Image
                  className="mx-auto h-auto w-full rounded-md object-cover drop-shadow-xl"
                  src={image.src}
                  alt={image.alt}
                  width={540}
                  height={405}
                  sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                  loading="eager"
                  priority
                />
              )}
            </div>
          </div>        
        </div>
      </div>

      {/* <div className="mx-auto text-center">
        <p className="text-xl font-normal"> Used by <b>236 companies </b> and <b> 210,300 calls </b> answered </p>
        <br></br>
        <p className="text-xl font-normal"><b> 🇪🇺 Compliant with EU AI regulation </b></p>
        <br></br>
      </div>     */}

      <div className="mx-auto text-center">
        <br></br>
      </div>   

      <div className="mx-auto text-center">
       
      </div>   

    </section>
  );
};

export default Hero2;
