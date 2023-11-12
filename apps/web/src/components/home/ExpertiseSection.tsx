import { Section } from 'ui/src/Section';

import ExpertiseCard from './ExpertiseCard';

export default function ExpertiseSection() {
  return (
    <Section header="Experties" headerAs="h2" id="experties">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ExpertiseCard
          name="Web Development"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta."
        />
        <ExpertiseCard
          name="SEO Consulting"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta."
        />
        <ExpertiseCard
          name="UI/UX Design"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta."
        />
        <ExpertiseCard
          name="Scripting"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, soluta."
        />
      </div>
    </Section>
  );
}
