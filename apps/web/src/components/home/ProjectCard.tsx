import Link from 'next/link';

import BlurImage from 'ui/src/BlurImage';
import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';
import { Project } from 'utils/src/types';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group/project-card overflow-hidden rounded"
      aria-label={`View ${project.title} project`}>
      <div className="aspect-h-9 aspect-w-16 relative w-full overflow-hidden">
        <BlurImage
          className="object-fill transition-all duration-base group-hover/project-card:scale-110"
          src={project.mainImage.url}
          alt={project.mainImage.alt}
          blurDataURL={project.mainImage.blurDataUrl}
          fill
        />
      </div>
      <div className="bg-background-900 p-6">
        <Heading as="h3" size="6" className="mb-1 line-clamp-2 font-medium md:line-clamp-1">
          {project.title}
        </Heading>
        <div className="h-5">
          <Text
            as="span"
            size="2"
            textColor="gray"
            className="block transition-all duration-base group-hover/project-card:-translate-y-1 group-hover/project-card:opacity-0">
            {project.projectType}
          </Text>
          <Text
            as="span"
            size="2"
            textColor="standard"
            className="block opacity-0 transition-all duration-base group-hover/project-card:-translate-y-4 group-hover/project-card:text-primary-400 group-hover/project-card:opacity-100">
            Show Project -&gt;
          </Text>
        </div>
      </div>
    </Link>
  );
}
