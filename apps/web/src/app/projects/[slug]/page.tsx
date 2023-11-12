import BlurImage from 'ui/src/BlurImage';
import { buttonVariants } from 'ui/src/Button';
import { Heading } from 'ui/src/Heading';
import { Responsive } from 'ui/src/Responsive';
import { Section } from 'ui/src/Section';
import { Text } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';
import { CMSClient } from 'utils/src/cms/CMSClient';
import { CMSImage } from 'utils/src/types';

type RequiredParams = { slug: string };
type PageProps = { params: RequiredParams };

const cms = new CMSClient();

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
            Web Development
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
              <ExtraInfo />
              <ExtraInfo />
            </div>
            <div className="mr-auto mt-2 flex items-center gap-2">
              <a
                rel="noopener nofollow noreferrer external"
                target="_blank"
                href={project.githubUrl}
                className={btnRepo}>
                <span>View Repo</span>
              </a>
              <a
                rel="noopener nofollow noreferrer external"
                target="_blank"
                href={project.websiteUrl}
                className={btnOpenProject}>
                <span className="transition-colors duration-base group-hover/open:text-primary-400">Open Project</span>
                <span className="transition-transform group-hover/open:animate-forward-backward">-&gt;</span>
              </a>
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

function ExtraInfo() {
  return (
    <div className="border-t border-grayscale-neutral-light-accessible p-3">
      <Heading as="h3" size="4" className="mb-1">
        Client
      </Heading>
      <Text as="p" size="2" textColor="gray">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aliquam.
      </Text>
    </div>
  );
}

export async function generateStaticParams(): Promise<RequiredParams[]> {
  const projects = await cms.getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
