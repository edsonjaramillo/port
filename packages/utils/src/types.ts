export type CMSImage = Asset & {
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  mainImage: CMSImage;
  supportingImages: CMSImage[];
  githubUrl: string;
  websiteUrl: string;
};

export type Asset = {
  id: string;
  fileName: string;
  mimeType: string;
  url: string;
  blurDataUrl?: string;
  alt?: string;
};
