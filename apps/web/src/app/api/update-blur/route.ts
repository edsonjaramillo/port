import { API } from 'utils/src/API';
import { Blur } from 'utils/src/Blur';
import { CMSClient } from 'utils/src/cms/CMSClient';

export async function GET(_: Request) {
  try {
    const cms = new CMSClient();
    const imageAssets = await cms.getAllImageAssets();
    if (imageAssets.length === 0) {
      return Response.json(API.success(null, 'No assets got updated blurDataUrl.'));
    }

    let numberOfAssetsBlurred = 0;
    for (const imageAsset of imageAssets) {
      const blur = await Blur.process(imageAsset);
      await cms.updateBlurDataURL(imageAsset.id, blur);
      await cms.publishAsset(imageAsset.id);
      numberOfAssetsBlurred++;
    }

    return Response.json(API.success(null, `${numberOfAssetsBlurred} asset(s) got updated blurDataUrl.`));
  } catch (error) {
    return Response.json(API.error('Error occured during blur process.'));
  }
}
