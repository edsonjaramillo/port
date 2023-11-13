import BlurImage from 'ui/src/BlurImage';
import { cn } from 'ui/src/lib/tw';

import BG from '../../../public/portfolio_bg.webp';

export default function CTA() {
  const headingCls = cn(
    'text-4xl font-bold leading-8 tracking-8 text-grayscale-50 md:text-5xl md:leading-9 md:tracking-9',
  );

  const subHeadingCls = cn(
    'text-3xl leading-7 tracking-7 text-grayscale-neutral-light-accessible md:text-4xl md:leading-8 md:tracking-8',
  );

  return (
    <header role="banner" className="relative h-[95vh] w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <h1 className={headingCls}>EDSON JARAMILLO</h1>
          <p className={subHeadingCls}>Full Stack Engineer</p>
        </div>
      </div>
      <BlurImage src={BG} alt="Background" fill className="z-[-1] object-cover" priority />
    </header>
  );
}
