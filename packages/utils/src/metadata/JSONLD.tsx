import React from 'react';
import { type WithContext, type WebSite } from 'schema-dts';

export const websiteJSONLD: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Edson Jaramillo's Portfolio",
  url: 'https://edsonjaramillo.com',
  description: 'Your source for all things example.',
  sameAs: ['https://github.com/edsonjaramillo'],
  author: {
    '@type': 'Person',
    name: 'Edson Jaramillo',
    url: 'https://edsonjaramillo.com',
  },
};

type JSONLDProps = { markup: WithContext<any> };
export function JSONLD({ markup }: JSONLDProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(markup) }} />;
}
