import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => {
  return (
    <div className={`absolute inset-0 ${hasBackground ? 'bg-custom-white ' : 'bg-transparent'}`}>
      {children}
    </div>
  );
};

export default Background;
