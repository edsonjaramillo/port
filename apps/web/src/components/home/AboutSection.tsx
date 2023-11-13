import BlurImage from 'ui/src/BlurImage';
import { Heading } from 'ui/src/Heading';
import { Section } from 'ui/src/Section';
import { Text } from 'ui/src/Text';

export default function AboutSection() {
  return (
    <Section header="About Me" headerAs="h2" id="about">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-0">
        <div className="relative aspect-1 overflow-hidden rounded md:m-auto md:w-96 lg:m-0 lg:w-auto">
          <AboutMeImage />
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
          <Heading as="h3" size="8">
            Getting to know me
          </Heading>
          <Text as="p" size="4" textColor="gray">
            I'm Edson Jaramillo, a dedicated and versatile Full Stack Software Engineer with a rich background in web
            technologies. Holding a Bachelor's degree in Computer Science from the University of Alabama in Huntsville,
            I've honed my skills to master both the front and back ends of web development. My passion for crafting
            seamless digital experiences is the cornerstone of my freelance career. I thrive on the challenges and
            intricacies of web development and anything software-related. Alongside my core programming expertise, I
            also specialize in Search Engine Optimization (SEO), User Interface (UI) and User Experience (UX) design,
            and automation scripting—ensuring a comprehensive, top-to-bottom approach to the projects I undertake. My
            goal is to create innovative solutions that not only meet but exceed client expectations.
          </Text>
          <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:gap-0">
            <Milestone main="2021" sub="CS Graduate" />
            <Milestone main="3.1 GPA" sub="Dean's List" />
            <Milestone main="Bilingual" sub="English & Spanish" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutMeImage() {
  return (
    <BlurImage src="https://media.graphassets.com/0MIA7MUtQfa7S0JDUUTw" alt="" fill className="block object-cover" />
  );
}

type MilestoneProps = {
  main: string;
  sub: string;
};
function Milestone({ main, sub }: MilestoneProps) {
  return (
    <div className="flex flex-col">
      <Heading as="h3" size="5" className="line-clamp-1 font-medium">
        {main}
      </Heading>
      <Text as="span" size="2" textColor="gray" className="line-clamp-1">
        {sub}
      </Text>
    </div>
  );
}
