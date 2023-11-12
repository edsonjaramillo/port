import { getPlaiceholder } from 'plaiceholder';

import type { CMSImage } from './types';

export class Blur {
  static async process(image: CMSImage) {
    const result = await fetch(image.url);
    const buffer = (await result.arrayBuffer()) as Buffer;
    const blur = (await getPlaiceholder(buffer, { size: 8 })).base64;
    return blur;
  }
}
