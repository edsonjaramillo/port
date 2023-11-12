import { Section } from 'ui/src/Section';
import { CMSClient } from 'utils/src/cms/CMSClient';

import ProjectCard from './ProjectCard';

export default async function ProjectSection() {
  const projects = await new CMSClient().getProjects();
  return (
    <Section header="Latest Projects" headerAs="h2" id="projects">
      <div className="grid grid-cols-fluid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
