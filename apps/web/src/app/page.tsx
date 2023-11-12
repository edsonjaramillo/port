import type { Metadata } from 'next';

import AboutSection from '../components/home/AboutSection';
import CTA from '../components/home/CTA';
import ExpertiseSection from '../components/home/ExpertiseSection';
import ProjectSection from '../components/home/ProjectSection';

export async function generateMetadata(): Promise<Metadata> {
  return {};
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
