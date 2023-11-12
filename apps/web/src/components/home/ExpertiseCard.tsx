import { ReactNode } from 'react';

import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';

type ExpertiseCardProps = {
  icon?: ReactNode;
  name: string;
  description: string;
};

export default function ExpertiseCard({ name, description }: ExpertiseCardProps) {
  return (
    <div className="bg-background-900 flex flex-col gap-2 rounded p-6">
      <Icon />
      <Heading as="h3" size="6" className="line-clamp-2">
        {name}
      </Heading>
      <Text as="p" textColor="gray" size="3">
        {description}
      </Text>
    </div>
  );
}

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="h-11 w-11 fill-primary-400">
      <path d="M560-120q-17 0-28.5-11.5T520-160q0-17 11.5-28.5T560-200q47 0 83.5-18.5T680-260q0-14-13-26t-36-22l59-59q32 19 51 45t19 62q0 66-63 103t-137 37ZM183-426q-29-17-46-39.5T120-520q0-42 31-70.5T262-654q63-29 80.5-40.5T360-720q0-16-19.5-28T280-760q-25 0-42 6t-31 20q-11 11-27 13t-29-9q-13-10-15-26t9-29q19-23 54.5-39t80.5-16q72 0 116 32.5t44 87.5q0 39-29 70t-117 69q-58 25-76 37t-18 24q0 9 11.5 17.5T243-486l-60 60Zm571-118L584-714l42-42q24-24 57.5-24t56.5 24l56 56q24 23 24 56.5T796-586l-42 42ZM240-200h56l288-288-56-56-288 288v56Zm-80 80v-170l368-368 170 170-368 368H160Zm368-424 56 56-56-56Z" />
    </svg>
  );
}
