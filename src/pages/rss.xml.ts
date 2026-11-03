import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { byDate, paperHref } from '../lib/site';

export async function GET(context: APIContext) {
  const papers = byDate(await getCollection('papers'));
  const signals = byDate(await getCollection('signals'));
  return rss({
    title: 'The Terminal State',
    description: 'Essays and signals on the utopian and dystopian readings of the terminal state.',
    site: context.site ?? 'https://theterminalstate.com',
    items: [
      ...papers.map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        link: paperHref(entry.id),
      })),
      ...signals.map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.date,
        link: `/signals/${entry.id}`,
      })),
    ],
  });
}
