import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.dselevura.example';
  const routes = ['', '/about', '/programs', '/portfolio', '/community', '/mentors', '/admissions', '/blog', '/contact'];
  const now = new Date().toISOString();
  return routes.map(r => ({ url: base + r, lastModified: now, changeFrequency: 'weekly', priority: r === '' ? 1 : 0.7 }));
}
