import type { Metadata } from 'next';

import { SEO } from 'utils/src/metadata/SEO';

import AboutSection from '../components/home/AboutSection';
import CTA from '../components/home/CTA';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ProjectSection from '../components/home/ProjectSection';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.metadata({
    title: 'Homepage',
    description:
      "Explore Edson Jaramillo's software engineering portfolio featuring innovative solutions, extensive coding expertise, and a passion for cutting-edge technologies",
    canonical: '/',
    robots: 'index, follow',
  });
}

export default async function HomePage() {
  return (
    <>
      <CTA />
      <ExpertiseSection />
      <ProjectSection />
      <AboutSection />
    </>
  );
}
