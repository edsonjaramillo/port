import Link from 'next/link';

import { Responsive } from 'ui/src/Responsive';
import { textVariants } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';

import { type NavigationLinks, navigationLinks } from '../../resources/links';
import DownloadResume from './DownloadResume';
import Logo from './Logo';

export default function DesktopNavigation() {
  return (
    <nav className="absolute left-0 top-0 z-1 hidden h-14 w-full md:flex" aria-label="Desktop">
      <Responsive className="relative flex items-center justify-between">
        <Logo />
        <ul className="absolute inset-0 z-1 m-auto flex max-w-md items-center justify-center gap-4 lg:max-w-3xl">
          {navigationLinks.map((link) => (
            <DesktopLink key={link.href} href={link.href} name={link.name} />
          ))}
        </ul>
        <DownloadResume />
      </Responsive>
    </nav>
  );
}

type DesktopLinkProps = Omit<NavigationLinks, 'icon'>;
function DesktopLink({ href, name }: DesktopLinkProps) {
  const variant = textVariants({ align: 'center', textColor: 'standard', size: '2' });
  const classes = cn(variant, 'group/desktop-link text-grayscale-50 transition-colors duration-base');
  return (
    <li>
      <Link href={href} className={classes}>
        <div className="inline">
          <span
            className="transition-colors duration-base group-hover/desktop-link:text-secondary group-focus/desktop-link:text-secondary"
            aria-hidden="true">
            /
          </span>
          <span
            className="mr-1 transition-colors duration-base group-hover/desktop-link:text-primary-600 group-focus/desktop-link:text-primary-600"
            aria-hidden="true">
            /
          </span>
        </div>
        <span className="duration-base group-hover/desktop-link:text-primary-300 group-focus/desktop-link:text-primary-300">
          {name}
        </span>
      </Link>
    </li>
  );
}
