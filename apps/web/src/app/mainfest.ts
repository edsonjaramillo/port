import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Edson Jaramillo',
    short_name: "Edson's Portfolio",
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
    theme_color: '#26165c',
    background_color: '#26165c',
    display: 'standalone',
  };
}
