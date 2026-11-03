import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const vector = z.enum(['acheron', 'lyra', 'both']);

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    vector,
    minutes: z.number().int().positive(),
  }),
});

const films = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/films' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    vector,
    platform: z.string().optional(),
    embed: z.string().url().optional(),
  }),
});

const signals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/signals' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    vector,
    outlet: z.string(),
    url: z.string().url(),
    topic: z.enum(['energy', 'biology', 'governance', 'compute', 'labor']),
  }),
});

export const collections = { papers, films, signals };
