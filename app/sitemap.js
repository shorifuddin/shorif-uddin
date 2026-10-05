const SITE = 'https://shorif-uddin.vercel.app';

const pages = [
  { p: '/home', priority: 1.0 },
  { p: '/resume', priority: 0.9 },
  { p: '/portfolio', priority: 0.9 },
  { p: '/blog', priority: 0.8 },
  { p: '/contact', priority: 0.8 },
];

export default function sitemap() {
  return pages.map(({ p, priority }) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority,
  }));
}
