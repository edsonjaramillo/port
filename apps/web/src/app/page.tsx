import type { Metadata } from 'next';

import CTA from '../components/home/CTA';

export async function generateMetadata(): Promise<Metadata> {
  return;
}

export default async function HomePage() {
  return (
    <>
      <CTA />
    </>
  );
}
