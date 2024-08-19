import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = true }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <div className="card mx-auto w-full max-w-screen-xl p-6 text-center bg-black text-white">
        {title && (
          <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl text-white">{title}</h2>
        )}
        {subtitle && <p className="text-xl text-white">{subtitle}</p>}
        {text && href && (
          <CTA
            callToAction={callToAction as CallToActionType}
            containerClass="mt-6 sm:mx-auto sm:w-fit"
            linkClass="btn btn-primary"
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
