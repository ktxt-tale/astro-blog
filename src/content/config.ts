import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    status: z.enum(["building", "live", "paused", "archived"]).default("building"),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    demoUrl: z.string().url().optional().or(z.literal("")),
    repoUrl: z.string().url().optional().or(z.literal("")),
    ecosystem: z.string().optional(),
    relatedProjects: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects };
