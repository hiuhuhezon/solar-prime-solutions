// This file goes at: src/content.config.ts
// (directly inside src/, NOT inside src/pages/ or src/content/)

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };