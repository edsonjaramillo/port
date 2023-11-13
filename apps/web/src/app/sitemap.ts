import { MetadataRoute } from 'next';

import { CMSClient } from 'utils/src/cms/CMSClient';
import { ENV } from 'utils/src/env';

import { navigationLinks } from '../resources/links';

// check to see if the href is a href with # or not
function isHash(href: string) {
  return /^#/.test(href);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = ENV.URL;
  const now = new Date();

  const coreLinks: MetadataRoute.Sitemap = [];
  for (const link of navigationLinks) {
    if (isHash(link.href)) {
      continue;
    }
    coreLinks.push({
      url: `${URL}${link.href}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  const projects = await new CMSClient().getProjects();
  const projectLinks: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${URL}/project/${p.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...coreLinks, ...projectLinks];
}
