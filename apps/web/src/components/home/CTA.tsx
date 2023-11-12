import BlurImage from 'ui/src/BlurImage';
import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';

import BG from '../../../public/portfolio_bg.webp';

export default function CTA() {
  return (
    <header role="banner" className="relative h-[95vh] w-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          <Heading as="h1" size="9">
            EDSON JARAMILLO
          </Heading>
          <Text as="p" size="7" textColor="gray">{`I'm a Fullstack Developer`}</Text>
        </div>
      </div>
      <BlurImage src={BG} alt="Background" fill className="z-[-1] object-cover" priority />
    </header>
  );
}
