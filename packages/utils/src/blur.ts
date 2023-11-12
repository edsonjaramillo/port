import { getPlaiceholder } from 'plaiceholder';

import type { CMSImage } from './types';

export class Blur {
  static async process(image: CMSImage) {
    const result = await fetch(image.url);
    const buffer = (await result.arrayBuffer()) as Buffer;
    const blur = (await getPlaiceholder(buffer, { size: 8 })).base64;

    return blur;
  }

  static default =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkklEQVR4nB3S2U/bBQDA8Z9AgHKD0BaKrFLKUdpxFSi0kJWrAgNkUDoYlxzriJOjkw6GHGNzOAgSObexySJRESgY0ewKSzMxMOMWo6gPM8RMZ4wJPqhZog9+TfYXfF4+go/bAfzd5AR5KBF7a5D4JCH31xPhqyPaR0+KXwFFIUewKhrJ9ctG5R6P0iMWf0GK73OhCHKvNA6KS1FJzMRLq0h8oY7M6Ha0kcfRhlejlzWRL+/gfN4i35/YoUdhJdklCYNfAQp3DUJycDnmuEE6X1qjPu8DqnOvUZw5QXZiL1pFCznxXdRkzVCfu8KfnwKr+9g0w1zMXyJJlIlQqeqj//Atlpq/5rd1OG19QPmhS+ji7UTKLMTKGsjWDNFWeoMvrgN78PQubHftEiWoEXSBJnbO/Axfwb/b8Fb3D7Q33qS2+Crnm+8w2/2Q+b7v2Fj4m8H2bxgb/AV24FzWAIGCDCFIkGCJMMPaP3wy/gcVhy7RWvwuc9ZNHPb73Dj3CO7B3enfMRlmcY7/xHLt+5QqOskNq0aIdE9luuoqe/N/MVp3hyx1DzXpF1ls2yIypAqp6Cibg3uMWTYoSX+Tqao1Xi9aZeyokxxxFUKeopPW1HEWjt9j+MgGSS/W0pR+AZbgqRPeO7vL3iJ82LaFPqqNvLhuGgyTdGXOUaI4hdBhmKb38Co5Ee1UHLQRKcmhTnOGh/2PeaN6npe1vXw8vIe9cAa1tIyCmNcoVw3wkfUBp/XvINi0IzyZ2Ge55z4Z8ibCA3SkistoNlx4FstDUNJVOE+O3EKEv5ZK5Slu9nwL1/YxS1sQEjwNLJgm4RH8uvwfJtUAuhALVsMIttLLvN10m3GLA6V3CupAIwPG63ALto85MIe3ISg9VBT5lrCSPwVO4DOYadzCJG+lJtmGzThMcogRZYABu/EKj88+4cv6NeojWkj00yNkSEspl9egFWUwndIPYz+CA9Y7dymOtxHmlYr6+SI69XM4jjmZyB7FquqhUFZLZlARgiJAhzmqBZWnFrUoicrgQkZTB1kxr3O5cpMhk4ONE5+z3eFkvsxBn36WSdMVhtJGSA8sRHB1ERPja8AS1U59gh2Nn54E7ywOBVdiT53idvMO6+ZFKkLLORnXwauxJ2k48AopPnoCXOUIrm4SPN1CEYuiUQZkki4pITGogKSgYoxhtc8UmYsKpaeWaFEiMV6JxHmlEeymwNM9jP8Bsokoqd4wRCsAAAAASUVORK5CYII=';
}
