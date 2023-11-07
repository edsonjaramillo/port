import { MetadataRoute } from 'next';

import { ENV } from 'utils/src/env';

import { navigationLinks } from '../resources/links';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = ENV.URL;
  const now = new Date();
  const coreLinks = navigationLinks.map((link) => ({
    url: `${URL}${link.href}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  const otherLinks = ['donations', 'sitemap'].map((link) => ({
    url: `${URL}/${link}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap;

  return [...coreLinks, ...otherLinks];
}
