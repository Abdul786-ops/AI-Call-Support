import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    {header && <Headline header={header} titleClass="text-3xl sm:text-4xl font-bold text-center mb-8" />}
    <div className="flex items-stretch justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <div
            key={`item-testimonial-${index}`}
            className={`card max-w-sm h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              !callToAction && href ? 'hover:border-primary-600' : ''
            }`}
          >
            {!callToAction && href ? (
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <ItemTestimonial
                  name={name}
                  job={job}
                  testimonial={testimonial}
                  isTestimonialUp={isTestimonialUp}
                  hasDividerLine={true}
                  startSlice={0}
                  endSlice={150}
                  image={image}
                  containerClass="h-full"
                  panelClass="justify-between items-stretch w-full h-full"
                  nameJobClass="text-left"
                  jobClass="text-sm"
                  imageClass="mr-4 h-12 w-12 rounded-full shadow-lg"
                />
              </Link>
            ) : (
              <ItemTestimonial
                name={name}
                job={job}
                testimonial={testimonial}
                isTestimonialUp={isTestimonialUp}
                hasDividerLine={true}
                startSlice={0}
                endSlice={150}
                image={image}
                containerClass="h-full"
                panelClass="justify-between items-stretch w-full h-full"
                nameJobClass="text-left"
                jobClass="text-sm"
                imageClass="mr-4 h-12 w-12 rounded-full shadow-lg"
              />
            )}
          </div>
        ))}
      </div>
    </div>
    {callToAction && (
      <CTA
        callToAction={callToAction}
        containerClass="flex justify-center mx-auto w-fit mt-8 md:mt-12"
        linkClass="btn hover:shadow-lg transition-shadow duration-300"
      />
    )}
  </WidgetWrapper>
);

export default Testimonials;
