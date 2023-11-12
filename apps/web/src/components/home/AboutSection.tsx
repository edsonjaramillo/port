import Image from 'next/image';

import { Heading } from 'ui/src/Heading';
import { Section } from 'ui/src/Section';
import { Text } from 'ui/src/Text';

export default function AboutSection() {
  return (
    <Section header="About Me" headerAs="h2" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-1 overflow-hidden rounded md:m-auto md:w-96 lg:m-0 lg:w-auto">
          <AboutMeImage />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
          <Heading as="h3" size="8">
            Getting to know me...
          </Heading>
          <Text as="p" size="4" textColor="gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint consequatur delectus? Nisi, hic. Laborum
            nulla quis, provident cumque, aliquid quo numquam non cum iste sint doloremque dolor, veniam hic consequatur
            deserunt autem? Vitae nulla accusamus, placeat quis temporibus dolor.
          </Text>
          <div className="flex w-full justify-between">
            <Milestone main="2021" sub="UAH Graduate" />
            <Milestone main="3.1 GPA" sub="Dean's List" />
            <Milestone main="Bilingual" sub="English & Spanish" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function AboutMeImage() {
  return <Image src="https://media.graphassets.com/0MIA7MUtQfa7S0JDUUTw" alt="" fill className="block object-cover" />;
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
