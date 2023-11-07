import { Responsive } from 'ui/src/Responsive';
import { SocialIcons } from 'ui/src/icons/SocialIcons';

import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-4 dark:border-t-grayscale-800">
      <Responsive>
        <div className="mt-16 flex flex-col items-center justify-between gap-6 xs:flex-row">
          <SocialIcons />
          <Logo />
          <span>{`© ${new Date().getFullYear()}`}</span>
        </div>
      </Responsive>
    </footer>
  );
}
