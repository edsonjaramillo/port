import Link from 'next/link';

import { buttonVariants } from 'ui/src/Button';
import { Heading } from 'ui/src/Heading';
import { Text } from 'ui/src/Text';
import { cn } from 'ui/src/lib/tw';

export default function NotFoundPage() {
  const btnCls = cn(buttonVariants({ size: 'medium', variant: 'primary' }), 'mt-4');
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Heading as="h1" size="9">
          404
        </Heading>
        <Text as="p" size="6" textColor="gray">
          Page not found.
        </Text>
        <Link className={btnCls} href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
