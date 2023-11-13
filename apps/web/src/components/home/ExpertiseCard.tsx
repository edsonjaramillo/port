import { ReactNode } from 'react';

import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';

type ExpertiseCardProps = {
  icon: ReactNode;
  name: string;
  description: string;
};

export function ExpertiseCard({ icon, name, description }: ExpertiseCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded bg-background-900 p-6">
      {icon}
      <Heading as="h3" size="6" className="line-clamp-2">
        {name}
      </Heading>
      <Text as="p" textColor="gray" size="3">
        {description}
      </Text>
    </div>
  );
}

type ExpertiseIconWrapperProps = React.SVGProps<SVGSVGElement>;

function ExpertiseIconWrapper({ children, ...props }: ExpertiseIconWrapperProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 text-primary-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}>
      {children}
    </svg>
  );
}

export function WebDevelopmentIcon() {
  return (
    <ExpertiseIconWrapper>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </ExpertiseIconWrapper>
  );
}

export function SEOIcon() {
  return (
    <ExpertiseIconWrapper>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </ExpertiseIconWrapper>
  );
}

export function UIUXIcon() {
  return (
    <ExpertiseIconWrapper>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
      />
    </ExpertiseIconWrapper>
  );
}

export function ScriptingIcon() {
  return (
    <ExpertiseIconWrapper>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
      />
    </ExpertiseIconWrapper>
  );
}
