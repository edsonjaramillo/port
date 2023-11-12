'use client';

import { Responsive } from 'ui/src/Responsive';

import { useMobileMenu } from '../../context/MobileMenuContext';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function MobileNavigation() {
  return (
    <nav aria-label="Mobile" className="z-1 fixed top-0 flex h-14 w-full backdrop-blur-sm md:hidden">
      <Responsive className="flex items-center justify-between">
        <Logo />
        <Hamburger />
        <MobileMenu />
      </Responsive>
    </nav>
  );
}

function Hamburger() {
  const { setMobileMenu } = useMobileMenu();
  return (
    <button type="button" onClick={() => setMobileMenu(true)}>
      <span className="sr-only">Open Mobile Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8 text-grayscale-950 dark:text-grayscale-50">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  );
}
