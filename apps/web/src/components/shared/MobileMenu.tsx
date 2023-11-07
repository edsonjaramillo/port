'use client';

import Link from 'next/link';

import { Responsive } from 'ui/src/Responsive';
import { cn } from 'ui/src/lib/tw';

import { useMobileMenu } from '../../context/MobileMenuContext';
import { type NavigationLinks, navigationLinks } from '../../resources/links';

export default function MobileMenu() {
  const { mobileMenuIsOpen, setMobileMenu, toggleMobileMenu } = useMobileMenu();

  const blurClass = cn(
    'absolute left-0 top-0 z-1 h-screen w-full transition-all duration-base md:hidden',
    mobileMenuIsOpen ? 'backdrop-blur-md' : 'pointer-events-none opacity-0',
  );

  const menuClass = cn(
    'absolute left-0 top-0 z-1 h-screen w-80 rounded bg-gradient-to-l from-primary-800 to-primary-900 p-3 transition-transform duration-base md:hidden',
    mobileMenuIsOpen ? 'translate-x-0' : '-translate-x-full',
  );

  return (
    <>
      <button type="button" className={blurClass} onClick={() => toggleMobileMenu()} tabIndex={-1}>
        <span className="sr-only">Close Mobile Menu</span>
      </button>
      <div className={menuClass}>
        <Responsive>
          <ExitMobileMenu />
          <ul>
            {navigationLinks.map((link, index) => (
              <MobileLink
                {...link}
                key={link.href}
                onClick={() => setMobileMenu(false)}
                onFocus={() => setMobileMenu(true)}
                {...(index === navigationLinks.length - 1 ? { onBlur: () => setMobileMenu(false) } : {})}
              />
            ))}
          </ul>
        </Responsive>
      </div>
    </>
  );
}

type MobileLinkProps = NavigationLinks & React.HTMLAttributes<HTMLLIElement>;

function MobileLink({ href, name, icon, ...props }: MobileLinkProps) {
  return (
    <li {...props}>
      <Link href={href} legacyBehavior>
        <a className="flex items-center gap-4 rounded p-3 transition-colors duration-base hover:bg-primary-800">
          {icon} {name}
        </a>
      </Link>
    </li>
  );
}

function ExitMobileMenu() {
  const { setMobileMenu } = useMobileMenu();
  return (
    <button
      onFocus={() => setMobileMenu(true)}
      onBlur={() => setMobileMenu(false)}
      onClick={() => setMobileMenu(false)}
      className="mb-4 ml-auto block"
      type="button">
      <span className="sr-only">Close Mobile Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8 text-grayscale-950 dark:text-grayscale-50">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}
