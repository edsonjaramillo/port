import { type Metadata } from 'next';

import BlurImage from 'ui/src/BlurImage';
import { buttonVariants } from 'ui/src/Button';
import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';
import { Section } from 'ui/src/Section';
import { Text } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { SEO } from 'utils/src/metadata/SEO';
import { CMSImage } from 'utils/src/types';

type RequiredParams = { slug: string };
type PageProps = { params: RequiredParams };

const cms = new CMSClient();

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await cms.getProjectBySlug(params.slug);
  const title = `${project.title} Project`;
  const url = `/projects/${project.slug}`;
  return SEO.metadata({
    title,
    description: project.description,
    canonical: url,
    robots: 'index, follow',
    openGraph: {
      title,
      description: project.description,
      images: project.mainImage.url,
      type: 'website',
      url,
    },
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const project = await cms.getProjectBySlug(params.slug);
  const btnVar = buttonVariants({ size: 'medium', variant: 'clear' });
  const btnOpenProject = cn(btnVar, 'group/open');
  const btnRepo = cn(btnVar, 'hover:text-primary-400');

  return (
    <div className="pt-28">
      <Responsive className="flex flex-col gap-8">
        <div>
          <Text as="span" textColor="gray">
            {project.projectType}
          </Text>
          <Heading as="h1" size="9">
            {project.title}
          </Heading>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Text as="p" size="4" textColor="gray" className="">
            {project.description}
          </Text>
          <div className="flex flex-col gap-2">
            <div className="mr-auto flex max-w-lg gap-4">
              <ExtraInfo title="Client" description={project.client} noWrap />
              <ExtraInfo title="Technologies" description={project.technologies} />
            </div>
            <div className="mr-auto mt-2 flex items-center gap-2">
              <a
                rel="noopener nofollow noreferrer external"
                target="_blank"
                href={project.githubUrl}
                className={btnRepo}>
                <span>View Repo</span>
              </a>
              {project.websiteUrl && (
                <a
                  rel="noopener nofollow noreferrer external"
                  target="_blank"
                  href={project.websiteUrl}
                  className={btnOpenProject}>
                  <span className="transition-colors duration-base group-hover/open:text-primary-400">
                    Visit Website
                  </span>
                  <span className="transition-transform group-hover/open:animate-forward-backward">-&gt;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </Responsive>
      <Section header="Screengrabs" id="screengrabs">
        <div className="grid grid-cols-1 gap-6">
          <Screenshot image={project.mainImage} />
          {project.supportingImages.map((image) => (
            <Screenshot key={image.id} image={image} />
          ))}
        </div>
      </Section>
    </div>
  );
}

type ScreenshotsProps = {
  image: CMSImage;
};

function Screenshot({ image }: ScreenshotsProps) {
  return (
    <div className="aspect-h-9 aspect-w-16 h-52 w-full overflow-hidden rounded">
      <BlurImage className="object-fill" src={image.url} alt={image.alt} fill blurDataURL={image.blurDataUrl} />
    </div>
  );
}

type ExtraInfoProps = {
  title: string;
  description: string;
  noWrap?: boolean;
};

function ExtraInfo({ title, description, noWrap }: ExtraInfoProps) {
  const descriptionClasses = cn(noWrap && 'whitespace-nowrap');

  return (
    <div className="border-t border-grayscale-neutral-light-accessible p-3">
      <Heading as="h2" size="4" className="mb-1">
        {title}
      </Heading>
      <Text as="p" size="4" textColor="gray" className={descriptionClasses}>
        {description}
      </Text>
    </div>
  );
}

export async function generateStaticParams(): Promise<RequiredParams[]> {
  const projects = await cms.getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
